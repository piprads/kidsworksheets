// Resources data structure - only shows sections with downloaded PDFs
// PDFs are self-hosted in the pdfs/ directory

// Load downloaded PDF structure
async function loadDownloadedPDFs() {
    try {
        const response = await fetch('pdfs/downloaded-structure.json');
        console.log('Fetch response:', response.status, response.statusText);
        
        if (response.ok) {
            const data = await response.json();
            console.log('✅ Successfully loaded PDF structure');
            console.log('Categories:', Object.keys(data));
            return data;
        } else {
            console.error('❌ Failed to fetch PDF structure:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('❌ Error fetching PDF structure:', error);
        console.log('Make sure pdfs/downloaded-structure.json exists and server is running');
    }
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
        container.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2>No PDFs downloaded yet</h2>
                <p>To populate the Resources tab with PDFs:</p>
                <ol style="text-align: left; max-width: 600px; margin: 20px auto;">
                    <li>Run: <code>python3 crawl-direct-pdfs.py</code> or <code>python3 crawl-expanded.py</code></li>
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
                console.log('📚 Loading resources...');
                loadDownloadedPDFs()
                    .then(downloadedData => {
                        if (downloadedData) {
                            console.log('✅ PDF data loaded, converting...');
                            const resources = convertToResourcesFormat(downloadedData);
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
        });
    });

    // Initial render if resources tab is active
    const resourcesTab = document.getElementById('resourcesTab');
    if (resourcesTab && resourcesTab.classList.contains('active')) {
        console.log('📚 Resources tab is active on load, loading...');
        loadDownloadedPDFs()
            .then(downloadedData => {
                if (downloadedData) {
                    const resources = convertToResourcesFormat(downloadedData);
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
});
