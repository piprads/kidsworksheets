// Resources data structure - only shows sections with downloaded PDFs
// PDFs are self-hosted in the pdfs/ directory

// Load downloaded PDF structure
async function loadDownloadedPDFs() {
    // First, try to use embedded data (works with file:// protocol)
    if (typeof EMBEDDED_PDF_STRUCTURE !== 'undefined' && EMBEDDED_PDF_STRUCTURE) {
        console.log('✅ Using embedded PDF structure data');
        console.log('📊 Categories found:', Object.keys(EMBEDDED_PDF_STRUCTURE));
        return EMBEDDED_PDF_STRUCTURE;
    }
    
    // Fallback: Try to fetch from server (only works with http:// protocol)
    if (window.location.protocol === 'file:') {
        console.warn('⚠️ Opening from file:// protocol and no embedded data found');
        console.warn('   To fix: Run the update script to embed the data');
        console.warn('   Or: Start a web server and access via http://localhost:8000');
        return null;
    }
    
    const paths = [
        'pdfs/downloaded-structure.json',
        './pdfs/downloaded-structure.json'
    ];
    
    for (const path of paths) {
        try {
            console.log(`🔍 Attempting to fetch: ${path}`);
            const response = await fetch(path, {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                }
            });
            
            console.log(`📡 Response from ${path}:`, {
                status: response.status,
                statusText: response.statusText,
                ok: response.ok,
                contentType: response.headers.get('content-type')
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('✅ Successfully loaded PDF structure from:', path);
                console.log('📊 Categories found:', Object.keys(data));
                console.log('📊 Total categories:', Object.keys(data).length);
                
                // Verify we have actual data
                if (data && typeof data === 'object' && Object.keys(data).length > 0) {
                    if (data.math) console.log('  ✓ Math:', Object.keys(data.math).length, 'grades');
                    if (data.reading) console.log('  ✓ Reading:', Object.keys(data.reading).length, 'grades');
                    if (data.grammar) console.log('  ✓ Grammar:', Object.keys(data.grammar).length, 'grades');
                    return data;
                } else {
                    console.warn('⚠️ Data loaded but appears empty');
                }
            } else {
                console.warn(`⚠️ Failed to fetch from ${path}:`, response.status, response.statusText);
            }
        } catch (error) {
            // Check if it's a CORS error
            if (error.message.includes('CORS') || error.message.includes('Failed to fetch')) {
                console.error('❌ CORS Error detected');
                console.error('   This usually means you are opening the file directly (file://)');
                console.error('   Solution: Run update-embedded-data.py to embed the data');
                console.error('   Or: Start a web server and access via http://localhost:8000');
                return null;
            }
            console.warn(`⚠️ Error fetching from ${path}:`, error.message);
            continue;
        }
    }
    
    console.error('❌ Failed to load PDF structure from all attempted paths');
    return null;
}

// Convert downloaded structure to resources format
function convertToResourcesFormat(downloadedData) {
    const resources = {};
    console.log('Converting data structure...');

    // Math
    if (downloadedData.math) {
        resources.math = {
            title: "Math Worksheets",
            icon: "🔢",
            byGrade: {}
        };

        Object.keys(downloadedData.math).forEach(grade => {
            resources.math.byGrade[grade] = {};
            
            Object.keys(downloadedData.math[grade]).forEach(topic => {
                resources.math.byGrade[grade][topic] = {};
                
                Object.keys(downloadedData.math[grade][topic]).forEach(subtopic => {
                    const worksheets = downloadedData.math[grade][topic][subtopic];
                    if (worksheets && worksheets.length > 0) {
                        resources.math.byGrade[grade][topic][subtopic] = worksheets;
                    }
                });
            });
        });
    }

    // Reading
    if (downloadedData.reading) {
        resources.reading = {
            title: "Reading Comprehension",
            icon: "📖",
            byGrade: {}
        };

        Object.keys(downloadedData.reading).forEach(grade => {
            resources.reading.byGrade[grade] = {};
            
            Object.keys(downloadedData.reading[grade]).forEach(topic => {
                resources.reading.byGrade[grade][topic] = {};
                
                Object.keys(downloadedData.reading[grade][topic]).forEach(subtopic => {
                    const worksheets = downloadedData.reading[grade][topic][subtopic];
                    if (worksheets && worksheets.length > 0) {
                        resources.reading.byGrade[grade][topic][subtopic] = worksheets;
                    }
                });
            });
        });
    }

    // Grammar
    if (downloadedData.grammar) {
        resources.grammar = {
            title: "Grammar & Writing",
            icon: "📚",
            byGrade: {}
        };

        Object.keys(downloadedData.grammar).forEach(grade => {
            resources.grammar.byGrade[grade] = {};
            
            Object.keys(downloadedData.grammar[grade]).forEach(topic => {
                resources.grammar.byGrade[grade][topic] = {};
                
                Object.keys(downloadedData.grammar[grade][topic]).forEach(subtopic => {
                    const worksheets = downloadedData.grammar[grade][topic][subtopic];
                    if (worksheets && worksheets.length > 0) {
                        resources.grammar.byGrade[grade][topic][subtopic] = worksheets;
                    }
                });
            });
        });
    }

    console.log('✅ Converted resources:', Object.keys(resources));
    return resources;
}

// Function to render resources
function renderResources(resources) {
    const container = document.getElementById('resourcesContent');
    if (!container) {
        console.error('❌ Resources container not found!');
        return;
    }

    if (!resources || Object.keys(resources).length === 0) {
        // Check if it's a CORS issue
        const isFileProtocol = window.location.protocol === 'file:';
        const corsMessage = isFileProtocol ? `
            <div style="background: #fff3cd; border: 2px solid #ffc107; border-radius: 10px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #856404; margin-top: 0;">⚠️ CORS Error Detected</h3>
                <p style="color: #856404;">
                    You are opening this file directly from your file system (file:// protocol).
                    Browsers block file loading for security reasons.
                </p>
                <p style="color: #856404; font-weight: bold;">To fix this:</p>
                <ol style="text-align: left; color: #856404;">
                    <li>Open Terminal/Command Prompt</li>
                    <li>Navigate to this folder: <code>cd /Users/radheshg/Documents/vibecoding/personalagent</code></li>
                    <li>Run: <code>python3 -m http.server 8000</code></li>
                    <li>Open your browser and go to: <a href="http://localhost:8000" style="color: #0066cc;">http://localhost:8000</a></li>
                </ol>
            </div>
        ` : '';
        
        container.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2>No PDFs downloaded yet</h2>
                ${corsMessage}
                <p>To populate the Resources tab with PDFs:</p>
                <ol style="text-align: left; max-width: 600px; margin: 20px auto;">
                    <li>Run: <code>python3 crawl-direct-pdfs.py</code> or <code>python3 crawl-expanded.py</code></li>
                    <li>Make sure you're accessing via <code>http://localhost:8000</code> (not file://)</li>
                    <li>Refresh this page</li>
                </ol>
                <p style="margin-top: 20px; color: #666;">
                    The download script will fetch PDFs from K5 Learning and save them locally.
                </p>
                <p style="margin-top: 10px; color: #999; font-size: 0.9em;">
                    Check browser console (F12) for error messages.
                </p>
            </div>
        `;
        return;
    }
    
    console.log('🎨 Rendering resources with categories:', Object.keys(resources));

    let html = '<div class="resources-search"><input type="text" id="resourceSearch" placeholder="🔍 Search resources..."></div>';

    // Render each category
    Object.keys(resources).forEach(categoryKey => {
        const category = resources[categoryKey];
        html += `<div class="resource-category">`;
        html += `<div class="resource-category-title">${category.icon} ${category.title}</div>`;

        // Handle byGrade structure
        if (category.byGrade) {
            Object.keys(category.byGrade).forEach(grade => {
                const gradeData = category.byGrade[grade];
                const hasContent = Object.keys(gradeData).some(topic => 
                    Object.keys(gradeData[topic]).some(subtopic => 
                        gradeData[topic][subtopic] && gradeData[topic][subtopic].length > 0
                    )
                );

                if (!hasContent) return; // Skip empty grades

                html += `<div class="resource-grade">`;
                html += `<div class="resource-grade-title" onclick="toggleExpand(this)">${grade}</div>`;
                html += `<div class="resource-items">`;

                Object.keys(gradeData).forEach(topic => {
                    const topicData = gradeData[topic];
                    const hasTopicContent = Object.keys(topicData).some(subtopic => 
                        topicData[subtopic] && topicData[subtopic].length > 0
                    );

                    if (!hasTopicContent) return; // Skip empty topics

                    html += `<div class="resource-topic">`;
                    html += `<div class="resource-topic-title" onclick="toggleExpand(this)">${topic}</div>`;
                    html += `<div class="resource-worksheets">`;

                    Object.keys(topicData).forEach(subtopic => {
                        const worksheets = topicData[subtopic];
                        if (!worksheets || worksheets.length === 0) return; // Skip empty subtopics

                        html += `<div class="resource-subtopic">`;
                        html += `<div class="resource-subtopic-title" onclick="toggleExpand(this)">${subtopic}</div>`;
                        html += `<div class="resource-items">`;

                        worksheets.forEach((worksheet, idx) => {
                            // Clean up title - remove duplicate "Worksheet" prefix
                            let title = worksheet.title || `Worksheet #${idx + 1}`;
                            if (title.startsWith('Worksheet Worksheet')) {
                                title = title.replace('Worksheet Worksheet', 'Worksheet');
                            }
                            
                            html += `<div class="resource-item">`;
                            html += `<span class="resource-item-title">${title}</span>`;
                            html += `<a href="${worksheet.url}" target="_blank" class="resource-item-link" download>Download PDF</a>`;
                            html += `</div>`;
                        });

                        html += `</div></div>`;
                    });

                    html += `</div></div>`;
                });

                html += `</div></div>`;
            });
        }

        html += `</div>`;
    });

    container.innerHTML = html;
    console.log('✅ Resources HTML rendered, length:', html.length);

    // Add search functionality
    const searchInput = document.getElementById('resourceSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.resource-item');
            const categories = document.querySelectorAll('.resource-category');
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'flex';
                    let parent = item.closest('.resource-category');
                    if (parent) parent.style.display = 'block';
                } else {
                    item.style.display = searchTerm === '' ? 'flex' : 'none';
                }
            });

            categories.forEach(cat => {
                const visibleItems = cat.querySelectorAll('.resource-item[style*="flex"], .resource-item:not([style*="none"])');
                if (visibleItems.length === 0 && searchTerm !== '') {
                    cat.style.display = 'none';
                } else {
                    cat.style.display = 'block';
                }
            });
        });
    }
}

// Toggle expand/collapse - must be global for onclick handlers
window.toggleExpand = function(element) {
    element.classList.toggle('expanded');
    const nextSibling = element.nextElementSibling;
    if (nextSibling) {
        nextSibling.classList.toggle('expanded');
    }
}

// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM loaded, setting up Resources tab...');
    
    // Load resources immediately on page load
    console.log('📚 Pre-loading resources...');
    loadDownloadedPDFs()
        .then(downloadedData => {
            if (downloadedData) {
                console.log('✅ PDF data pre-loaded, categories:', Object.keys(downloadedData));
                window.cachedResources = convertToResourcesFormat(downloadedData);
                console.log('✅ Resources cached, categories:', Object.keys(window.cachedResources));
            } else {
                console.warn('⚠️ No PDF data found on pre-load');
                window.cachedResources = null;
            }
        })
        .catch(error => {
            console.error('❌ Error pre-loading PDFs:', error);
            window.cachedResources = null;
        });
    
    const tabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            console.log('🖱️ Tab clicked:', targetTab);

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const targetContent = document.getElementById(`${targetTab}Tab`);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Render resources when resources tab is opened
            if (targetTab === 'resources') {
                console.log('📚 Resources tab opened');
                
                // Use cached resources if available, otherwise load fresh
                if (window.cachedResources && Object.keys(window.cachedResources).length > 0) {
                    console.log('✅ Using cached resources');
                    renderResources(window.cachedResources);
                } else {
                    console.log('📥 Loading resources fresh...');
                    loadDownloadedPDFs()
                        .then(downloadedData => {
                            if (downloadedData) {
                                console.log('✅ PDF data loaded, converting...');
                                const resources = convertToResourcesFormat(downloadedData);
                                window.cachedResources = resources;
                                if (Object.keys(resources).length > 0) {
                                    console.log('✅ Rendering resources...');
                                    renderResources(resources);
                                } else {
                                    console.warn('⚠️ No resources after conversion');
                                    renderResources(null);
                                }
                            } else {
                                console.warn('⚠️ No PDF data found');
                                renderResources(null);
                            }
                        })
                        .catch(error => {
                            console.error('❌ Error loading PDFs:', error);
                            renderResources(null);
                        });
                }
            }
        });
    });

    // Initial render if resources tab is active
    const resourcesTab = document.getElementById('resourcesTab');
    if (resourcesTab && resourcesTab.classList.contains('active')) {
        console.log('📚 Resources tab is active on load, loading...');
        if (window.cachedResources && Object.keys(window.cachedResources).length > 0) {
            renderResources(window.cachedResources);
        } else {
            loadDownloadedPDFs()
                .then(downloadedData => {
                    if (downloadedData) {
                        const resources = convertToResourcesFormat(downloadedData);
                        window.cachedResources = resources;
                        if (Object.keys(resources).length > 0) {
                            renderResources(resources);
                        } else {
                            renderResources(null);
                        }
                    } else {
                        renderResources(null);
                    }
                })
                .catch(error => {
                    console.error('Error loading PDFs:', error);
                    renderResources(null);
                });
        }
    }
});
