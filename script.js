// Worksheet Generator for ICSE Syllabus (4-8 years)
// Based on ICSE Curriculum Topics

// ICSE Curriculum Topics by Subject
const icseTopics = {
    math: {
        '4-5': [
            'Numbers 1-20',
            'Counting',
            'Number Names',
            'Before-After-Between',
            'Place Value',
            'Comparing Numbers',
            'Addition (Simple)',
            'Subtraction (Simple)',
            'Shapes',
            'Patterns',
            'Measurement (Length)'
        ],
        '6-7': [
            'Numbers 100-200',
            'Numbers 201-999',
            'Place Value & Face Value',
            'Expanded Form',
            'Before-After-Between',
            'Comparing Numbers',
            'Ordering Numbers',
            'Addition (2-digit)',
            'Addition (with Carry Over)',
            'Subtraction (2-digit)',
            'Subtraction (with Borrowing)',
            'Multiplication (Tables)',
            'Division (Equal Sharing)',
            'Money',
            'Time',
            'Measurement',
            'Shapes & Patterns'
        ],
        '7-8': [
            'Numbers 100-999',
            'Place Value',
            'Expanded Form',
            'Comparing & Ordering',
            'Addition (3-digit)',
            'Subtraction (3-digit)',
            'Multiplication (2-digit × 1-digit)',
            'Division (Long Division)',
            'Fractions',
            'Money',
            'Time',
            'Measurement (Length, Weight, Capacity)',
            'Geometry (Lines & Shapes)',
            'Data Handling',
            'Patterns'
        ]
    },
    english: {
        '4-5': [
            'Alphabets (A-Z)',
            'Phonics',
            'Vocabulary',
            'Simple Words',
            'Picture Matching',
            'Rhyming Words'
        ],
        '6-7': [
            'The Sentence',
            'Nouns (Number & Gender)',
            'Use of a, an, the',
            'Pronouns',
            'Adjectives',
            'Verbs',
            'Spelling',
            'Reading Comprehension',
            'Opposites',
            'Synonyms'
        ],
        '7-8': [
            'Types of Sentences',
            'Nouns & Pronouns',
            'Adjectives (Degrees)',
            'Verbs & Tenses',
            'Adverbs',
            'Prepositions',
            'Conjunctions',
            'Punctuation',
            'Reading Comprehension',
            'Creative Writing'
        ]
    },
    hindi: {
        '4-5': [
            'वर्णमाला (अ-अः)',
            'स्वर (Vowels)',
            'व्यंजन (Consonants)',
            'मात्राएं (Matras)',
            'सरल शब्द (Simple Words)',
            'चित्र मिलान (Picture Matching)'
        ],
        '6-7': [
            'वर्णमाला',
            'मात्राएं',
            'शब्द निर्माण',
            'वाक्य निर्माण',
            'संज्ञा (Noun)',
            'सर्वनाम (Pronoun)',
            'विशेषण (Adjective)',
            'क्रिया (Verb)',
            'विलोम शब्द (Opposites)',
            'पर्यायवाची (Synonyms)',
            'अनुच्छेद (Paragraph)'
        ],
        '7-8': [
            'व्याकरण (Grammar)',
            'संज्ञा के भेद',
            'सर्वनाम',
            'विशेषण',
            'क्रिया और काल',
            'क्रिया विशेषण',
            'संबंधबोधक',
            'समुच्चयबोधक',
            'विराम चिह्न',
            'अनुच्छेद लेखन',
            'पत्र लेखन',
            'कहानी लेखन'
        ]
    },
    gk: {
        '4-5': [
            'Colors',
            'Animals',
            'Body Parts',
            'Fruits',
            'Vegetables',
            'Transport',
            'Seasons'
        ],
        '6-7': [
            'Countries & Capitals',
            'Indian States',
            'Planets',
            'Days & Months',
            'Festivals',
            'Rivers',
            'Mountains'
        ],
        '7-8': [
            'World Geography',
            'Indian Geography',
            'History',
            'Science Facts',
            'Inventions',
            'Famous Personalities',
            'Current Affairs'
        ]
    }
};

// Exercise data structure with ICSE-aligned content
const exercises = {
    math: {
        '4-5': {
            'Numbers 1-20': [
                { type: 'number_tracing', numbers: [1,2,3,4,5,6,7,8,9,10] },
                { type: 'counting', count: 20 },
                { type: 'number_names', numbers: [1,2,3,4,5,6,7,8,9,10] }
            ],
            'Counting': [
                { type: 'counting', count: 20 },
                { type: 'skip_counting', by: 2 }
            ],
            'Before-After-Between': [
                { type: 'before_after_between', count: 10 }
            ],
            'Place Value': [
                { type: 'place_value', numbers: [10,20,30] }
            ],
            'Comparing Numbers': [
                { type: 'compare', count: 10 }
            ],
            'Addition (Simple)': [
                { type: 'addition', problems: 10, max: 10 }
            ],
            'Subtraction (Simple)': [
                { type: 'subtraction', problems: 10, max: 10 }
            ],
            'Shapes': [
                { type: 'shapes', shapes: ['circle','square','triangle','rectangle'] }
            ],
            'Patterns': [
                { type: 'patterns', pattern: 'AB' },
                { type: 'patterns', pattern: 'ABC' }
            ],
            'Measurement (Length)': [
                { type: 'measurement', type: 'length' }
            ]
        },
        '6-7': {
            'Numbers 100-200': [
                { type: 'number_range', start: 100, end: 200, count: 10 },
                { type: 'place_value', numbers: [100,150,200] }
            ],
            'Addition (2-digit)': [
                { type: 'addition', problems: 10, max: 99, digits: 2 }
            ],
            'Addition (with Carry Over)': [
                { type: 'addition_carry', problems: 10, max: 99 }
            ],
            'Subtraction (2-digit)': [
                { type: 'subtraction', problems: 10, max: 99, digits: 2 }
            ],
            'Subtraction (with Borrowing)': [
                { type: 'subtraction_borrow', problems: 10, max: 99 }
            ],
            'Multiplication (Tables)': [
                { type: 'multiplication', problems: 10, table: 2 },
                { type: 'multiplication', problems: 10, table: 3 },
                { type: 'multiplication', problems: 10, table: 5 }
            ],
            'Division (Equal Sharing)': [
                { type: 'division', problems: 10, divisor: 2 },
                { type: 'division', problems: 10, divisor: 5 }
            ],
            'Money': [
                { type: 'money', currency: 'rupees', problems: 10 }
            ],
            'Time': [
                { type: 'time', format: 'hour' },
                { type: 'time', format: 'half_hour' }
            ]
        },
        '7-8': {
            'Addition (3-digit)': [
                { type: 'addition', problems: 10, max: 999, digits: 3 }
            ],
            'Subtraction (3-digit)': [
                { type: 'subtraction', problems: 10, max: 999, digits: 3 }
            ],
            'Multiplication (2-digit × 1-digit)': [
                { type: 'multiplication_2x1', problems: 10 }
            ],
            'Division (Long Division)': [
                { type: 'long_division', problems: 10 }
            ],
            'Fractions': [
                { type: 'fractions', type: 'simple' },
                { type: 'fractions', type: 'compare' }
            ],
            'Money': [
                { type: 'money', currency: 'rupees', problems: 10, complex: true }
            ],
            'Time': [
                { type: 'time', format: 'quarter' },
                { type: 'time', format: 'minutes' }
            ],
            'Measurement (Length, Weight, Capacity)': [
                { type: 'measurement', type: 'length' },
                { type: 'measurement', type: 'weight' },
                { type: 'measurement', type: 'capacity' }
            ],
            'Geometry (Lines & Shapes)': [
                { type: 'geometry', shapes: ['2D','3D'] }
            ],
            'Data Handling': [
                { type: 'data_handling', count: 10 }
            ]
        }
    },
    english: {
        '4-5': {
            'Alphabets (A-Z)': [
                { type: 'alphabet_tracing', letters: 'all' }
            ],
            'Phonics': [
                { type: 'phonics', sounds: 'all_basic' }
            ],
            'Vocabulary': [
                { type: 'vocabulary', words: 'common_objects' }
            ],
            'Simple Words': [
                { type: 'spelling', words: ['cat','dog','sun','moon','tree','bird','fish','car','house','book','pen','pencil','table','chair','window','door','water','milk','bread','rice'] }
            ],
            'Picture Matching': [
                { type: 'picture_match', count: 20 }
            ],
            'Rhyming Words': [
                { type: 'rhyming', count: 20 }
            ]
        },
        '6-7': {
            'The Sentence': [
                { type: 'sentence_types', count: 20 }
            ],
            'Nouns (Number & Gender)': [
                { type: 'grammar', type: 'nouns' }
            ],
            'Use of a, an, the': [
                { type: 'articles', count: 20 }
            ],
            'Pronouns': [
                { type: 'pronouns', count: 20 }
            ],
            'Adjectives': [
                { type: 'adjectives', count: 20 }
            ],
            'Verbs': [
                { type: 'grammar', type: 'verbs' }
            ],
            'Spelling': [
                { type: 'spelling', words: ['house','water','flower','school','friend','happy','beautiful','important','different','together','because','always','sometimes','usually','quickly','slowly','carefully','quietly','loudly','brightly'] }
            ],
            'Reading Comprehension': [
                { type: 'reading_comprehension', level: 'medium' }
            ],
            'Opposites': [
                { type: 'opposites', count: 20 }
            ],
            'Synonyms': [
                { type: 'synonyms', count: 20 }
            ]
        },
        '7-8': {
            'Types of Sentences': [
                { type: 'sentence_types', count: 20 }
            ],
            'Nouns & Pronouns': [
                { type: 'grammar', type: 'nouns' }
            ],
            'Adjectives (Degrees)': [
                { type: 'adjectives', count: 20 }
            ],
            'Verbs & Tenses': [
                { type: 'tenses', count: 20 }
            ],
            'Adverbs': [
                { type: 'adverbs', count: 20 }
            ],
            'Prepositions': [
                { type: 'prepositions', count: 20 }
            ],
            'Conjunctions': [
                { type: 'conjunctions', count: 20 }
            ],
            'Punctuation': [
                { type: 'punctuation', count: 20 }
            ],
            'Reading Comprehension': [
                { type: 'reading_comprehension', level: 'advanced' }
            ],
            'Creative Writing': [
                { type: 'creative_writing', prompt: 'complex' }
            ]
        }
    },
    hindi: {
        '4-5': {
            'वर्णमाला (अ-अः)': [
                { type: 'hindi_alphabet', letters: 'all' }
            ],
            'स्वर (Vowels)': [
                { type: 'hindi_vowels', count: 13 }
            ],
            'व्यंजन (Consonants)': [
                { type: 'hindi_consonants', count: 33 }
            ],
            'मात्राएं (Matras)': [
                { type: 'hindi_matras', count: 10 }
            ],
            'सरल शब्द (Simple Words)': [
                { type: 'hindi_words', count: 10 }
            ]
        },
        '6-7': {
            'वर्णमाला': [
                { type: 'hindi_alphabet', letters: 'all' }
            ],
            'शब्द निर्माण': [
                { type: 'hindi_word_formation', count: 10 }
            ],
            'वाक्य निर्माण': [
                { type: 'hindi_sentence_formation', count: 10 }
            ],
            'संज्ञा (Noun)': [
                { type: 'hindi_nouns', count: 10 }
            ],
            'सर्वनाम (Pronoun)': [
                { type: 'hindi_pronouns', count: 10 }
            ],
            'विलोम शब्द (Opposites)': [
                { type: 'hindi_opposites', count: 10 }
            ]
        },
        '7-8': {
            'व्याकरण (Grammar)': [
                { type: 'hindi_grammar', count: 10 }
            ],
            'संज्ञा के भेद': [
                { type: 'hindi_nouns_types', count: 10 }
            ],
            'क्रिया और काल': [
                { type: 'hindi_verbs_tenses', count: 10 }
            ],
            'अनुच्छेद लेखन': [
                { type: 'hindi_paragraph', count: 1 }
            ],
            'पत्र लेखन': [
                { type: 'hindi_letter', count: 1 }
            ]
        }
    },
    gk: {
        '4-5': {
            'Colors': [
                { type: 'colors' }
            ],
            'Animals': [
                { type: 'animals' }
            ],
            'Body Parts': [
                { type: 'body_parts' }
            ],
            'Fruits': [
                { type: 'fruits' }
            ],
            'Vegetables': [
                { type: 'vegetables' }
            ],
            'Transport': [
                { type: 'transport' }
            ],
            'Seasons': [
                { type: 'seasons' }
            ]
        },
        '6-7': {
            'Countries & Capitals': [
                { type: 'countries' }
            ],
            'Indian States': [
                { type: 'states_india' }
            ],
            'Planets': [
                { type: 'planets' }
            ],
            'Days & Months': [
                { type: 'days_weeks' },
                { type: 'months' }
            ],
            'Festivals': [
                { type: 'festivals' }
            ],
            'Rivers': [
                { type: 'rivers' }
            ],
            'Mountains': [
                { type: 'mountains' }
            ]
        },
        '7-8': {
            'World Geography': [
                { type: 'countries' },
                { type: 'world_geography' }
            ],
            'Indian Geography': [
                { type: 'states_india' },
                { type: 'rivers' },
                { type: 'mountains' },
                { type: 'indian_geography' }
            ],
            'History': [
                { type: 'history' }
            ],
            'Science Facts': [
                { type: 'science_facts' }
            ],
            'Inventions': [
                { type: 'inventions' }
            ],
            'Famous Personalities': [
                { type: 'famous_personalities' }
            ],
            'Current Affairs': [
                { type: 'current_affairs' }
            ]
        }
    }
};

// Helper function
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Calculate difficulty multiplier based on age group and difficulty level
function getDifficultyMultiplier(ageGroup, difficulty) {
    // Base multipliers by age group
    const ageMultipliers = {
        '4-5': 1.0,   // Youngest - easiest base
        '6-7': 1.5,   // Medium age - moderate base
        '7-8': 2.0    // Oldest - harder base
    };
    
    // Difficulty level multipliers
    const difficultyMultipliers = {
        'easy': 0.7,
        'medium': 1.0,
        'hard': 1.5
    };
    
    const ageMult = ageMultipliers[ageGroup] || 1.0;
    const diffMult = difficultyMultipliers[difficulty] || 1.0;
    
    return ageMult * diffMult;
}

// Get max number based on age and difficulty
function getMaxNumber(ageGroup, difficulty, baseMax) {
    const multiplier = getDifficultyMultiplier(ageGroup, difficulty);
    return Math.floor(baseMax * multiplier);
}

// Helper function to ensure unique questions
function ensureUniqueQuestions(questions, targetCount, signatureFn = null) {
    const seen = new Set();
    const uniqueQuestions = [];
    
    // If we have a signature function, use it to track uniqueness
    // Otherwise, use the question text as signature
    const getSignature = signatureFn || (q => {
        // Extract the core question content (remove question number and formatting)
        return q.text.replace(/<span[^>]*>.*?<\/span>\s*/, '').trim();
    });
    
    // First, collect all unique questions
    for (const q of questions) {
        const sig = getSignature(q);
        if (!seen.has(sig)) {
            seen.add(sig);
            uniqueQuestions.push(q);
        }
    }
    
    // If we need more questions and have a way to generate more, try to generate unique ones
    // Otherwise, return what we have (will be handled by formatQuestionsTable)
    return uniqueQuestions;
}

// Format questions in 4-column table layout (2 questions per row)
function formatQuestionsTable(questions, questionsPerPage = 20) {
    // Remove duplicates first
    const seen = new Set();
    const uniqueQuestions = [];
    for (const q of questions) {
        // Extract signature (remove question number)
        const sig = q.text.replace(/<span[^>]*>.*?<\/span>\s*/, '').trim();
        if (!seen.has(sig)) {
            seen.add(sig);
            uniqueQuestions.push(q);
        }
    }
    
    // If we have fewer unique questions than needed, we'll pad with empty cells
    // But we should never duplicate questions
    const selectedQuestions = uniqueQuestions.slice(0, questionsPerPage);
    
    // Pad with empty questions if needed (better than duplicating)
    while (selectedQuestions.length < questionsPerPage) {
        selectedQuestions.push({ text: '', boxClass: '' });
    }
    const questionPairs = [];
    
    // Group questions in pairs
    for (let i = 0; i < selectedQuestions.length; i += 2) {
        questionPairs.push({
            q1: selectedQuestions[i] || { text: '', boxClass: '' },
            q2: selectedQuestions[i + 1] || { text: '', boxClass: '' }
        });
    }
    
    let html = '<table class="questions-table">';
    
    questionPairs.forEach((pair, rowIndex) => {
        html += '<tr>';
        
        // Question 1
        html += `<td class="question-cell">${pair.q1.text}</td>`;
        html += `<td class="answer-cell"><div class="answer-box ${pair.q1.boxClass || ''}"></div></td>`;
        
        // Question 2
        html += `<td class="question-cell">${pair.q2.text || ''}</td>`;
        html += `<td class="answer-cell"><div class="answer-box ${pair.q2.boxClass || ''}"></div></td>`;
        
        html += '</tr>';
    });
    
    html += '</table>';
    
    return html;
}

// Populate topic dropdown based on subject and age group
function updateTopicDropdown() {
    const subject = document.getElementById('subject').value;
    const ageGroup = document.getElementById('ageGroup').value;
    const topicSelect = document.getElementById('topic');
    
    topicSelect.innerHTML = '<option value="all">All Topics (Random)</option>';
    
    if (icseTopics[subject] && icseTopics[subject][ageGroup]) {
        icseTopics[subject][ageGroup].forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicSelect.appendChild(option);
        });
    }
}

// Generate 10 problems per exercise type
function generateProblems(exercise, count = 10) {
    const problems = [];
    for (let i = 0; i < count; i++) {
        problems.push(exercise);
    }
    return problems;
}

// Generate Math Exercises
function generateMathExercise(exercise, ageGroup, topic, difficulty = 'medium') {
    let html = '';
    const problemsPerExercise = 20; // 20 questions per page
    const questions = [];
    const multiplier = getDifficultyMultiplier(ageGroup, difficulty);
    
    switch(exercise.type) {
        case 'counting':
            const countMax = Math.min(50, Math.floor((exercise.count || 20) * multiplier));
            const seenCounts = new Set();
            let countAttempts = 0;
            while (questions.length < problemsPerExercise && countAttempts < 1000) {
                countAttempts++;
                const num = randomInt(1, countMax);
                if (!seenCounts.has(num)) {
                    seenCounts.add(num);
                    let stars = '';
                    for (let j = 0; j < num; j++) {
                        stars += '⭐ ';
                    }
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> Count: ${stars} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Count and write the number:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'addition':
            let baseMax = exercise.max || (exercise.digits === 2 ? 99 : exercise.digits === 3 ? 999 : 10);
            if (ageGroup === '4-5') baseMax = Math.min(20, baseMax);
            else if (ageGroup === '6-7') baseMax = Math.min(100, baseMax);
            else baseMax = Math.min(500, baseMax);
            
            const addMax = getMaxNumber(ageGroup, difficulty, baseMax);
            const seenAdditions = new Set();
            let addAttempts = 0;
            while (questions.length < problemsPerExercise && addAttempts < 1000) {
                addAttempts++;
                const a = randomInt(1, addMax);
                const b = randomInt(1, addMax);
                const sig = `${Math.min(a,b)}+${Math.max(a,b)}`; // Normalize to avoid duplicates like 3+5 and 5+3
                if (!seenAdditions.has(sig)) {
                    seenAdditions.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${a} + ${b} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Solve the addition problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'addition_carry':
            let carryMax = ageGroup === '4-5' ? 50 : ageGroup === '6-7' ? 200 : 500;
            carryMax = getMaxNumber(ageGroup, difficulty, carryMax);
            const seenCarry = new Set();
            let carryAttempts = 0;
            while (questions.length < problemsPerExercise && carryAttempts < 1000) {
                carryAttempts++;
                const minA = Math.floor(10 * multiplier);
                const a = randomInt(minA, carryMax);
                const b = randomInt(Math.floor(5 * multiplier), carryMax);
                const sig = `${Math.min(a,b)}+${Math.max(a,b)}`;
                if (!seenCarry.has(sig)) {
                    seenCarry.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${a} + ${b} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Add with carry over:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'subtraction':
            let subBaseMax = exercise.max || (exercise.digits === 2 ? 99 : exercise.digits === 3 ? 999 : 10);
            if (ageGroup === '4-5') subBaseMax = Math.min(20, subBaseMax);
            else if (ageGroup === '6-7') subBaseMax = Math.min(100, subBaseMax);
            else subBaseMax = Math.min(500, subBaseMax);
            
            const subMax = getMaxNumber(ageGroup, difficulty, subBaseMax);
            const seenSubtractions = new Set();
            let subAttempts = 0;
            while (questions.length < problemsPerExercise && subAttempts < 1000) {
                subAttempts++;
                const a = randomInt(1, subMax);
                const b = randomInt(1, a);
                const sig = `${a}-${b}`;
                if (!seenSubtractions.has(sig)) {
                    seenSubtractions.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${a} - ${b} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Solve the subtraction problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'subtraction_borrow':
            let borrowMax = ageGroup === '4-5' ? 50 : ageGroup === '6-7' ? 200 : 500;
            borrowMax = getMaxNumber(ageGroup, difficulty, borrowMax);
            const seenBorrow = new Set();
            let borrowAttempts = 0;
            while (questions.length < problemsPerExercise && borrowAttempts < 1000) {
                borrowAttempts++;
                const minA = Math.floor(15 * multiplier);
                const a = randomInt(minA, borrowMax);
                const b = randomInt(Math.floor(8 * multiplier), a - 1);
                const sig = `${a}-${b}`;
                if (!seenBorrow.has(sig)) {
                    seenBorrow.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${a} - ${b} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Subtract with borrowing:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'multiplication':
            let tableBase = exercise.table || 2;
            // Increase table difficulty with age and difficulty level
            if (ageGroup === '6-7' && difficulty === 'hard') tableBase = randomInt(3, 5);
            else if (ageGroup === '7-8') {
                if (difficulty === 'easy') tableBase = randomInt(2, 4);
                else if (difficulty === 'medium') tableBase = randomInt(3, 6);
                else tableBase = randomInt(5, 10);
            }
            const maxMultiplier = Math.floor(10 * multiplier);
            const seenMult = new Set();
            let multAttempts = 0;
            while (questions.length < problemsPerExercise && multAttempts < 1000) {
                multAttempts++;
                const b = randomInt(1, maxMultiplier);
                const sig = `${tableBase}×${b}`;
                if (!seenMult.has(sig)) {
                    seenMult.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${tableBase} × ${b} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Solve the multiplication problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'multiplication_2x1':
            let mult2x1Max = ageGroup === '4-5' ? 30 : ageGroup === '6-7' ? 99 : 999;
            mult2x1Max = getMaxNumber(ageGroup, difficulty, mult2x1Max);
            const seenMult2x1 = new Set();
            let mult2x1Attempts = 0;
            while (questions.length < problemsPerExercise && mult2x1Attempts < 1000) {
                mult2x1Attempts++;
                const a = randomInt(10, Math.min(99, mult2x1Max));
                const b = randomInt(2, Math.min(9, Math.floor(9 * multiplier)));
                const sig = `${a}×${b}`;
                if (!seenMult2x1.has(sig)) {
                    seenMult2x1.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${a} × ${b} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Multiply 2-digit by 1-digit:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'division':
            const divisor = exercise.divisor || 2;
            const seenDiv = new Set();
            let divAttempts = 0;
            while (questions.length < problemsPerExercise && divAttempts < 1000) {
                divAttempts++;
                const quotient = randomInt(1, 10);
                const dividend = divisor * quotient;
                const sig = `${dividend}÷${divisor}`;
                if (!seenDiv.has(sig)) {
                    seenDiv.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${dividend} ÷ ${divisor} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Solve the division problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'long_division':
            const seenLongDiv = new Set();
            let longDivAttempts = 0;
            while (questions.length < problemsPerExercise && longDivAttempts < 1000) {
                longDivAttempts++;
                const divisor = randomInt(2, 9);
                const quotient = randomInt(10, 50);
                const dividend = divisor * quotient;
                const sig = `${dividend}÷${divisor}`;
                if (!seenLongDiv.has(sig)) {
                    seenLongDiv.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${dividend} ÷ ${divisor} = `,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Long division:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'number_tracing':
            const numbers = exercise.numbers || [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
            numbers.slice(0, problemsPerExercise).forEach((num, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Trace: ${num}`,
                    boxClass: 'tall'
                });
            });
            html = '<div class="exercise-item math">';
            html += '<div class="question">Trace and write the numbers:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'number_names':
            const numNames = exercise.numbers || [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
            numNames.slice(0, problemsPerExercise).forEach((num, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${num} = `,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item math">';
            html += '<div class="question">Write number names:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'before_after_between':
            const seenBeforeAfter = new Set();
            let beforeAfterAttempts = 0;
            while (questions.length < problemsPerExercise && beforeAfterAttempts < 1000) {
                beforeAfterAttempts++;
                const num = randomInt(2, 19);
                if (!seenBeforeAfter.has(num)) {
                    seenBeforeAfter.add(num);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> Before ${num}: ___, After ${num}: ___, Between ${num} & ${num + 2}: ___`,
                        boxClass: 'tall'
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Write before, after, and between:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'place_value':
            const pvNumbers = exercise.numbers || [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];
            pvNumbers.slice(0, problemsPerExercise).forEach((num, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${num}: Place Value ___, Face Value ___`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item math">';
            html += '<div class="question">Write place value and face value:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'compare':
            const seenCompare = new Set();
            let compareAttempts = 0;
            while (questions.length < problemsPerExercise && compareAttempts < 1000) {
                compareAttempts++;
                const a = randomInt(1, 50);
                const b = randomInt(1, 50);
                const sig = `${Math.min(a,b)}___${Math.max(a,b)}`;
                if (!seenCompare.has(sig)) {
                    seenCompare.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${a} ___ ${b} (use >, <, or =)`,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Compare numbers:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'shapes':
            const shapes = exercise.shapes || ['circle','square','triangle','rectangle','oval','diamond','star','heart','pentagon','hexagon','octagon','trapezoid','parallelogram','rhombus','cylinder','cube','sphere','cone','pyramid','prism'];
            shapes.slice(0, problemsPerExercise).forEach((shape, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Draw a ${shape}:`,
                    boxClass: 'tall'
                });
            });
            html = '<div class="exercise-item math">';
            html += '<div class="question">Name and draw the shapes:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'patterns':
            const patterns = ['AB', 'ABC', 'AABB', 'ABBC', '123', 'AAB', 'ABB'];
            const seenPatterns = new Set();
            let patternAttempts = 0;
            while (questions.length < problemsPerExercise && patternAttempts < 1000) {
                patternAttempts++;
                const pattern = patterns[randomInt(0, patterns.length - 1)];
                let patternStr = '';
                for (let j = 0; j < 3; j++) {
                    patternStr += pattern;
                }
                if (!seenPatterns.has(patternStr)) {
                    seenPatterns.add(patternStr);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> Complete: ${patternStr} ___`,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Complete the patterns:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'money':
            const seenMoney = new Set();
            let moneyAttempts = 0;
            while (questions.length < problemsPerExercise && moneyAttempts < 1000) {
                moneyAttempts++;
                const rupees = randomInt(1, exercise.complex ? 500 : 100);
                const paise = randomInt(0, 99);
                const sig = `${rupees}.${paise}`;
                if (!seenMoney.has(sig)) {
                    seenMoney.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ₹${rupees}.${paise.toString().padStart(2, '0')} = ___ paise`,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Money problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'time':
            const seenTime = new Set();
            let timeAttempts = 0;
            while (questions.length < problemsPerExercise && timeAttempts < 1000) {
                timeAttempts++;
                const hour = randomInt(1, 12);
                const minute = exercise.format === 'half_hour' ? (randomInt(0, 1) * 30) : 
                              exercise.format === 'quarter' ? (randomInt(0, 3) * 15) : 
                              randomInt(0, 59);
                const sig = `${hour}:${minute}`;
                if (!seenTime.has(sig)) {
                    seenTime.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> Draw time ${hour}:${minute.toString().padStart(2, '0')} on clock:`,
                        boxClass: 'tall'
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Time problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'fractions':
            const seenFractions = new Set();
            let fractionAttempts = 0;
            while (questions.length < problemsPerExercise && fractionAttempts < 1000) {
                fractionAttempts++;
                const num = randomInt(1, 8);
                const den = randomInt(num + 1, 10);
                const sig = `${num}/${den}`;
                if (!seenFractions.has(sig)) {
                    seenFractions.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> Shade ${num}/${den} of the shape:`,
                        boxClass: 'tall'
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Fraction problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'measurement':
            const measureTypes = {
                'length': ['cm', 'm'],
                'weight': ['g', 'kg'],
                'capacity': ['ml', 'l']
            };
            const units = measureTypes[exercise.type] || ['cm', 'm'];
            const seenMeasurement = new Set();
            let measurementAttempts = 0;
            while (questions.length < problemsPerExercise && measurementAttempts < 1000) {
                measurementAttempts++;
                const value = randomInt(1, 100);
                const unit = units[randomInt(0, units.length - 1)];
                const sig = `${value}${unit}`;
                if (!seenMeasurement.has(sig)) {
                    seenMeasurement.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> ${value} ${unit} = ___`,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Measurement problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'word_problems':
            const wordProblems = [
                'Ravi has 5 apples. He gives 2 to his friend. How many apples does Ravi have now?',
                'There are 8 birds on a tree. 3 birds fly away. How many birds are left?',
                'Priya has 4 pencils. Her mother gives her 3 more. How many pencils does Priya have?',
                'There are 10 students in a class. 4 students are absent. How many students are present?',
                'A shop has 15 toys. They sell 7 toys. How many toys are left?',
                'Rohan has 6 chocolates. He eats 2 chocolates. How many chocolates are left?',
                'Sita has 12 flowers. She gives 5 to her friend. How many flowers are left?',
                'There are 20 books on a shelf. 8 books are taken. How many books are left?',
                'Mohan has 9 marbles. He finds 4 more. How many marbles does he have?',
                'A box has 18 candies. 6 candies are eaten. How many candies are left?',
                'There are 14 balloons. 5 balloons pop. How many balloons are left?',
                'Anita has 7 dolls. She gets 3 more. How many dolls does she have?',
                'There are 16 cookies. 8 cookies are eaten. How many cookies are left?',
                'Ravi has 11 stickers. He gives 4 away. How many stickers does he have?',
                'There are 9 cars. 2 cars leave. How many cars are left?',
                'Priya has 13 books. She reads 6 books. How many books are left?',
                'There are 17 flowers. 9 flowers are picked. How many flowers are left?',
                'Rohan has 8 toys. He gets 5 more. How many toys does he have?',
                'There are 12 eggs. 4 eggs break. How many eggs are left?',
                'Sita has 15 pencils. She gives 7 away. How many pencils does she have?'
            ];
            shuffleArray(wordProblems).slice(0, problemsPerExercise).forEach((problem, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${problem}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item math">';
            html += '<div class="question">Word problems:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'skip_counting':
            const skipBy = exercise.by || 2;
            for (let i = 0; i < problemsPerExercise; i++) {
                const start = randomInt(1, 20);
                const next = start + skipBy;
                questions.push({
                    text: `<span class="question-number">${i + 1}.</span> Skip count by ${skipBy}: ${start}, ___, ${next}`,
                    boxClass: ''
                });
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Skip counting:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'number_range':
            const rangeStart = exercise.start || 1;
            const rangeEnd = exercise.end || 100;
            const seenRange = new Set();
            let rangeAttempts = 0;
            while (questions.length < problemsPerExercise && rangeAttempts < 1000) {
                rangeAttempts++;
                const num = randomInt(rangeStart, rangeEnd);
                if (!seenRange.has(num)) {
                    seenRange.add(num);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> Write number: ${num}`,
                        boxClass: ''
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Write numbers in range:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'geometry':
            const geoShapes = exercise.shapes || ['circle','square','triangle','rectangle','oval','diamond','star','heart','pentagon','hexagon','octagon','trapezoid','parallelogram','rhombus','cylinder','cube','sphere','cone','pyramid','prism'];
            geoShapes.slice(0, problemsPerExercise).forEach((shape, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Draw ${shape}:`,
                    boxClass: 'tall'
                });
            });
            html = '<div class="exercise-item math">';
            html += '<div class="question">Geometry - Draw shapes:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'data_handling':
            const seenData = new Set();
            const items = ['apples', 'bananas', 'oranges', 'grapes', 'mangoes'];
            let dataAttempts = 0;
            while (questions.length < problemsPerExercise && dataAttempts < 1000) {
                dataAttempts++;
                const item = items[randomInt(0, items.length - 1)];
                const count = randomInt(1, 20);
                const sig = `${item}:${count}`;
                if (!seenData.has(sig)) {
                    seenData.add(sig);
                    questions.push({
                        text: `<span class="question-number">${questions.length + 1}.</span> Count ${item}: ${count} (draw tally marks)`,
                        boxClass: 'tall'
                    });
                }
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Data handling - Count and record:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        default:
            // Fallback for any unhandled exercise type - ensure 20 questions
            for (let i = 0; i < problemsPerExercise; i++) {
                questions.push({
                    text: `<span class="question-number">${i + 1}.</span> Practice question:`,
                    boxClass: ''
                });
            }
            html = '<div class="exercise-item math">';
            html += '<div class="question">Practice exercises:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
    }
    
    return html;
}

// Generate English Exercises (ensuring 20 problems each)
function generateEnglishExercise(exercise, ageGroup, topic, difficulty = 'medium') {
    let html = '';
    const problemsPerExercise = 20; // 20 questions per page
    const questions = [];
    
    switch(exercise.type) {
        case 'alphabet_tracing':
            const allLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            const letters = exercise.letters === 'all' ? allLetters : (exercise.letters || ['A','B','C']);
            letters.slice(0, problemsPerExercise).forEach((letter, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Trace: ${letter}`,
                    boxClass: 'tall'
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Trace and write the letters:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'spelling':
            const words = exercise.words || ['cat','dog','sun','moon','tree','bird','fish','car','house','book','pen','pencil','table','chair','window','door','water','milk','bread','rice'];
            words.slice(0, problemsPerExercise).forEach((word, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Spell: ${word[0]}___${word[word.length-1]}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Spell the words correctly:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'sentence_types':
            const sentences = [
                'The cat is sleeping.',
                'What is your name?',
                'How beautiful the flower is!',
                'Please close the door.',
                'I love playing cricket.',
                'Where are you going?',
                'What a wonderful day!',
                'The sun shines brightly.',
                'Can you help me?',
                'Stop making noise!',
                'The bird is flying.',
                'Do you like ice cream?',
                'What a great idea!',
                'Please sit down.',
                'I am very happy.',
                'When will you come?',
                'How amazing this is!',
                'The teacher is teaching.',
                'Will you play with me?',
                'What a beautiful garden!'
            ];
            sentences.slice(0, problemsPerExercise).forEach((sentence, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> "${sentence}" Type:`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Identify sentence types:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'grammar':
            const grammarType = exercise.type || 'nouns';
            if (grammarType === 'nouns') {
                const nounSentences = [
                    'The cat is sleeping.', 'Ravi plays with a ball.', 'My mother cooks food.',
                    'The bird flies in the sky.', 'We go to school every day.', 'The book is on the table.',
                    'Delhi is the capital of India.', 'The teacher is very kind.', 'I love my family.',
                    'The dog barks loudly.', 'The sun shines brightly.', 'The tree is tall.',
                    'My father is a doctor.', 'The car is red.', 'The flower is beautiful.',
                    'The school is big.', 'The river flows slowly.', 'The mountain is high.',
                    'The child is playing.', 'The house is white.'
                ];
                nounSentences.slice(0, problemsPerExercise).forEach((s, idx) => {
                    questions.push({
                        text: `<span class="question-number">${idx + 1}.</span> Circle nouns: ${s}`,
                        boxClass: ''
                    });
                });
            } else if (grammarType === 'verbs') {
                const verbSentences = [
                    'The cat is sleeping.', 'Ravi plays with a ball.', 'My mother cooks food.',
                    'The bird flies in the sky.', 'We go to school every day.', 'I read books daily.',
                    'She sings beautifully.', 'They run in the park.', 'He writes letters.',
                    'We eat lunch together.', 'The dog barks loudly.', 'The sun shines.',
                    'The teacher teaches well.', 'Children play games.', 'Birds fly high.',
                    'Fish swim in water.', 'Students study hard.', 'The bell rings.',
                    'The wind blows.', 'The rain falls.'
                ];
                verbSentences.slice(0, problemsPerExercise).forEach((s, idx) => {
                    questions.push({
                        text: `<span class="question-number">${idx + 1}.</span> Circle verbs: ${s}`,
                        boxClass: ''
                    });
                });
            }
            html = '<div class="exercise-item english">';
            html += `<div class="question">Circle the ${grammarType}:</div>`;
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'reading_comprehension':
            const passages = {
                simple: {
                    text: 'Ravi has a pet dog. The dog is brown. Ravi loves his dog. They play together every day.',
                    questions: ['What is Ravi\'s pet?', 'What color is the dog?', 'When do they play?', 'Who loves the dog?']
                },
                medium: {
                    text: 'Priya goes to school every day. She learns many things at school. Her favorite subject is English. She likes to read storybooks. Her teacher is very kind.',
                    questions: ['Where does Priya go every day?', 'What is her favorite subject?', 'What does she like to do?', 'How is her teacher?']
                },
                advanced: {
                    text: 'The sun is a star. It gives us light and heat. Plants need sunlight to grow. Without the sun, there would be no life on Earth. We should be thankful for the sun.',
                    questions: ['What is the sun?', 'What does the sun give us?', 'Why do plants need sunlight?', 'What would happen without the sun?']
                }
            };
            const level = exercise.level || 'medium';
            const passage = passages[level] || passages.medium;
            // For reading comprehension, use all unique questions from passage
            const uniqueQuestions = [...new Set(passage.questions)];
            uniqueQuestions.slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            // If we need more questions, pad with empty
            while (questions.length < problemsPerExercise) {
                questions.push({
                    text: `<span class="question-number">${questions.length + 1}.</span> Additional question:`,
                    boxClass: ''
                });
            }
            html = '<div class="exercise-item english">';
            html += '<div class="question">Read the passage and answer:</div>';
            html += `<div style="margin: 15px 0; padding: 15px; background: #f5f5f5; border-radius: 5px; line-height: 1.8;">${passage.text}</div>`;
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'opposites':
            const opposites = [
                ['hot', 'cold'], ['big', 'small'], ['happy', 'sad'], ['up', 'down'],
                ['day', 'night'], ['good', 'bad'], ['fast', 'slow'], ['high', 'low'],
                ['light', 'dark'], ['full', 'empty'], ['open', 'close'], ['new', 'old'],
                ['clean', 'dirty'], ['wet', 'dry'], ['soft', 'hard'], ['sweet', 'sour'],
                ['young', 'old'], ['thin', 'thick'], ['long', 'short'], ['wide', 'narrow']
            ];
            opposites.slice(0, problemsPerExercise).forEach((pair, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Opposite of ${pair[0]}:`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Write the opposite words:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'phonics':
            const allPhonicsSounds = [
                {sound: 'a', word: 'apple'}, {sound: 'e', word: 'egg'}, {sound: 'i', word: 'igloo'},
                {sound: 'o', word: 'orange'}, {sound: 'u', word: 'umbrella'}, {sound: 'b', word: 'ball'},
                {sound: 'c', word: 'cat'}, {sound: 'd', word: 'dog'}, {sound: 'f', word: 'fish'},
                {sound: 'g', word: 'goat'}, {sound: 'h', word: 'hat'}, {sound: 'j', word: 'jug'},
                {sound: 'k', word: 'kite'}, {sound: 'l', word: 'lion'}, {sound: 'm', word: 'moon'},
                {sound: 'n', word: 'nest'}, {sound: 'p', word: 'pen'}, {sound: 'q', word: 'queen'},
                {sound: 'r', word: 'rat'}, {sound: 's', word: 'sun'}, {sound: 't', word: 'tree'},
                {sound: 'v', word: 'van'}, {sound: 'w', word: 'water'}, {sound: 'x', word: 'box'},
                {sound: 'y', word: 'yellow'}, {sound: 'z', word: 'zebra'}
            ];
            const phonicsSounds = exercise.sounds === 'all_basic' ? allPhonicsSounds : allPhonicsSounds;
            shuffleArray(phonicsSounds).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Sound "${item.sound}" as in "${item.word}". Write a word with this sound:`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Phonics - Write words with the given sounds (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'vocabulary':
            const vocabWords = ['cat','dog','sun','moon','tree','bird','fish','car','house','book','pen','pencil','table','chair','window','door','water','milk','bread','rice','apple','banana','orange','mango','grapes','ball','toy','doll','bike','phone'];
            shuffleArray(vocabWords).slice(0, problemsPerExercise).forEach((word, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Write the word for this picture: [${word}]`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Vocabulary - Write the words (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'rhyming':
            const rhymingPairs = [
                {word: 'cat', rhyme: 'hat'}, {word: 'dog', rhyme: 'log'}, {word: 'sun', rhyme: 'fun'},
                {word: 'moon', rhyme: 'spoon'}, {word: 'tree', rhyme: 'bee'}, {word: 'ball', rhyme: 'wall'},
                {word: 'book', rhyme: 'look'}, {word: 'car', rhyme: 'star'}, {word: 'fish', rhyme: 'dish'},
                {word: 'house', rhyme: 'mouse'}, {word: 'pen', rhyme: 'hen'}, {word: 'cake', rhyme: 'bake'},
                {word: 'rain', rhyme: 'train'}, {word: 'boat', rhyme: 'coat'}, {word: 'bed', rhyme: 'red'},
                {word: 'box', rhyme: 'fox'}, {word: 'duck', rhyme: 'truck'}, {word: 'bee', rhyme: 'tree'},
                {word: 'hat', rhyme: 'bat'}, {word: 'ring', rhyme: 'king'}
            ];
            shuffleArray(rhymingPairs).slice(0, problemsPerExercise).forEach((pair, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Word that rhymes with "${pair.word}":`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Rhyming Words - Write a word that rhymes (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'picture_match':
            const pictureWords = ['cat','dog','sun','moon','tree','bird','fish','car','house','book','pen','pencil','table','chair','window','door','water','milk','bread','rice'];
            shuffleArray(pictureWords).slice(0, problemsPerExercise).forEach((word, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Match the picture to the word: [picture of ${word}] = `,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Picture Matching - Write the word for each picture (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'articles':
            const articleSentences = [
                'I see ___ apple.',
                'She has ___ umbrella.',
                'He is ___ honest boy.',
                'This is ___ elephant.',
                'That is ___ orange.',
                'I need ___ hour.',
                'She wants ___ book.',
                'He saw ___ eagle.',
                'This is ___ ice cream.',
                'That is ___ uniform.',
                'I have ___ idea.',
                'She found ___ egg.',
                'He bought ___ onion.',
                'This is ___ useful tool.',
                'That is ___ ant.',
                'I saw ___ owl.',
                'She has ___ eraser.',
                'He needs ___ envelope.',
                'This is ___ igloo.',
                'That is ___ octopus.'
            ];
            shuffleArray(articleSentences).slice(0, problemsPerExercise).forEach((sentence, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Fill in: ${sentence}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Use of a, an, the - Fill in the blanks (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'pronouns':
            const pronounQuestions = [
                'Replace "Ravi" with a pronoun: Ravi is playing.',
                'Replace "Priya" with a pronoun: Priya is reading.',
                'Replace "The cat" with a pronoun: The cat is sleeping.',
                'Replace "The children" with a pronoun: The children are playing.',
                'Replace "My mother" with a pronoun: My mother cooks food.',
                'Replace "The book" with a pronoun: The book is on the table.',
                'Replace "Ravi and Priya" with a pronoun: Ravi and Priya are friends.',
                'Replace "The teacher" with a pronoun: The teacher is teaching.',
                'Replace "The dog" with a pronoun: The dog is barking.',
                'Replace "My father" with a pronoun: My father is working.',
                'Replace "The birds" with a pronoun: The birds are flying.',
                'Replace "The car" with a pronoun: The car is red.',
                'Replace "The students" with a pronoun: The students are studying.',
                'Replace "The flower" with a pronoun: The flower is beautiful.',
                'Replace "My sister" with a pronoun: My sister is dancing.',
                'Replace "The ball" with a pronoun: The ball is round.',
                'Replace "The trees" with a pronoun: The trees are tall.',
                'Replace "My friend" with a pronoun: My friend is kind.',
                'Replace "The house" with a pronoun: The house is big.',
                'Replace "The toys" with a pronoun: The toys are fun.'
            ];
            shuffleArray(pronounQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Pronouns - Replace with correct pronoun (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'adjectives':
            const adjectiveQuestions = [
                'The sun is ___. (bright)',
                'The elephant is ___. (big)',
                'The ant is ___. (small)',
                'The rose is ___. (red)',
                'The sky is ___. (blue)',
                'The milk is ___. (white)',
                'The grass is ___. (green)',
                'The chocolate is ___. (sweet)',
                'The lemon is ___. (sour)',
                'The ice is ___. (cold)',
                'The fire is ___. (hot)',
                'The feather is ___. (light)',
                'The stone is ___. (heavy)',
                'The cat is ___. (soft)',
                'The rock is ___. (hard)',
                'The flower is ___. (beautiful)',
                'The monster is ___. (ugly)',
                'The child is ___. (happy)',
                'The man is ___. (tall)',
                'The mouse is ___. (tiny)'
            ];
            shuffleArray(adjectiveQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Adjectives - Fill in the correct adjective (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'tenses':
            const tenseQuestions = [
                'I ___ to school every day. (go)',
                'She ___ a book yesterday. (read)',
                'They ___ playing now. (be)',
                'He ___ food tomorrow. (eat)',
                'We ___ the game last week. (win)',
                'I ___ my homework. (do)',
                'She ___ a song. (sing)',
                'They ___ football. (play)',
                'He ___ a letter. (write)',
                'We ___ to the park. (go)',
                'I ___ my teeth. (brush)',
                'She ___ her hair. (comb)',
                'They ___ their lunch. (eat)',
                'He ___ his bike. (ride)',
                'We ___ a story. (read)',
                'I ___ a picture. (draw)',
                'She ___ a cake. (bake)',
                'They ___ a song. (sing)',
                'He ___ a ball. (catch)',
                'We ___ a kite. (fly)'
            ];
            shuffleArray(tenseQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Verbs & Tenses - Fill in the correct form (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'adverbs':
            const adverbQuestions = [
                'She runs ___. (fast)',
                'He speaks ___. (slowly)',
                'They work ___. (hard)',
                'I sing ___. (beautifully)',
                'She writes ___. (neatly)',
                'He reads ___. (carefully)',
                'They play ___. (quietly)',
                'I eat ___. (quickly)',
                'She walks ___. (slowly)',
                'He talks ___. (loudly)',
                'They study ___. (well)',
                'I sleep ___. (soundly)',
                'She dances ___. (gracefully)',
                'He jumps ___. (high)',
                'They laugh ___. (happily)',
                'I cry ___. (sadly)',
                'She smiles ___. (sweetly)',
                'He runs ___. (swiftly)',
                'They walk ___. (gently)',
                'I speak ___. (clearly)'
            ];
            shuffleArray(adverbQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Adverbs - Fill in the correct adverb (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'prepositions':
            const prepositionQuestions = [
                'The book is ___ the table. (on)',
                'The cat is ___ the box. (in)',
                'The ball is ___ the chair. (under)',
                'The bird is ___ the tree. (on)',
                'The car is ___ the garage. (in)',
                'The dog is ___ the door. (behind)',
                'The pen is ___ the book. (beside)',
                'The flower is ___ the vase. (in)',
                'The picture is ___ the wall. (on)',
                'The mouse is ___ the hole. (in)',
                'The bird flies ___ the sky. (in)',
                'The fish swims ___ the water. (in)',
                'The cat jumps ___ the table. (onto)',
                'The ball rolls ___ the floor. (on)',
                'The book falls ___ the shelf. (from)',
                'The car goes ___ the bridge. (over)',
                'The child sits ___ the chair. (on)',
                'The teacher stands ___ the board. (near)',
                'The sun shines ___ the sky. (in)',
                'The moon appears ___ night. (at)'
            ];
            shuffleArray(prepositionQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Prepositions - Fill in the correct preposition (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'conjunctions':
            const conjunctionQuestions = [
                'I like apples ___ oranges. (and)',
                'She is tired ___ she keeps working. (but)',
                'I will go ___ you come. (if)',
                'He ran fast ___ he was late. (because)',
                'I like tea ___ coffee. (or)',
                'She is smart ___ kind. (and)',
                'I tried hard ___ I failed. (but)',
                'We will play ___ it rains. (unless)',
                'He is tall ___ strong. (and)',
                'I was hungry ___ I ate. (so)',
                'She is happy ___ she won. (because)',
                'I will come ___ you invite me. (if)',
                'He is small ___ brave. (but)',
                'We can go ___ stay. (or)',
                'I like red ___ blue. (and)',
                'She is tired ___ she sleeps. (so)',
                'I will help ___ you need. (if)',
                'He is old ___ active. (but)',
                'We can walk ___ run. (or)',
                'I am happy ___ you are here. (because)'
            ];
            shuffleArray(conjunctionQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Conjunctions - Fill in the correct conjunction (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'punctuation':
            const punctuationSentences = [
                'What is your name',
                'I love playing',
                'How beautiful',
                'The cat is sleeping',
                'Where are you going',
                'Stop making noise',
                'My name is Ravi',
                'What a wonderful day',
                'The sun shines brightly',
                'Can you help me',
                'I am very happy',
                'What time is it',
                'The book is on the table',
                'How amazing',
                'Please sit down',
                'The bird is flying',
                'What is this',
                'I like ice cream',
                'How are you',
                'The dog barks loudly'
            ];
            shuffleArray(punctuationSentences).slice(0, problemsPerExercise).forEach((sentence, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Add punctuation: "${sentence}"`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Punctuation - Add correct punctuation mark (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'nouns_gender':
            const genderQuestions = [
                {word: 'actor', gender: 'actress'},
                {word: 'lion', gender: 'lioness'},
                {word: 'prince', gender: 'princess'},
                {word: 'king', gender: 'queen'},
                {word: 'boy', gender: 'girl'},
                {word: 'man', gender: 'woman'},
                {word: 'uncle', gender: 'aunt'},
                {word: 'father', gender: 'mother'},
                {word: 'brother', gender: 'sister'},
                {word: 'son', gender: 'daughter'},
                {word: 'nephew', gender: 'niece'},
                {word: 'husband', gender: 'wife'},
                {word: 'gentleman', gender: 'lady'},
                {word: 'hero', gender: 'heroine'},
                {word: 'waiter', gender: 'waitress'},
                {word: 'host', gender: 'hostess'},
                {word: 'tiger', gender: 'tigress'},
                {word: 'peacock', gender: 'peahen'},
                {word: 'cock', gender: 'hen'},
                {word: 'bull', gender: 'cow'}
            ];
            shuffleArray(genderQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Feminine of "${item.word}":`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Nouns - Gender - Write the feminine form (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'jumbled_words':
            const jumbledSentences = [
                {words: ['I', 'like', 'to', 'play'], correct: 'I like to play.'},
                {words: ['The', 'cat', 'is', 'sleeping'], correct: 'The cat is sleeping.'},
                {words: ['My', 'mother', 'cooks', 'food'], correct: 'My mother cooks food.'},
                {words: ['We', 'go', 'to', 'school'], correct: 'We go to school.'},
                {words: ['The', 'sun', 'is', 'bright'], correct: 'The sun is bright.'},
                {words: ['I', 'love', 'my', 'family'], correct: 'I love my family.'},
                {words: ['Birds', 'fly', 'in', 'the', 'sky'], correct: 'Birds fly in the sky.'},
                {words: ['Water', 'is', 'very', 'important'], correct: 'Water is very important.'},
                {words: ['The', 'dog', 'barks', 'loudly'], correct: 'The dog barks loudly.'},
                {words: ['I', 'read', 'books', 'daily'], correct: 'I read books daily.'},
                {words: ['She', 'sings', 'beautifully'], correct: 'She sings beautifully.'},
                {words: ['They', 'run', 'in', 'the', 'park'], correct: 'They run in the park.'},
                {words: ['He', 'writes', 'letters'], correct: 'He writes letters.'},
                {words: ['We', 'eat', 'lunch', 'together'], correct: 'We eat lunch together.'},
                {words: ['The', 'teacher', 'is', 'kind'], correct: 'The teacher is kind.'},
                {words: ['I', 'play', 'with', 'toys'], correct: 'I play with toys.'},
                {words: ['The', 'bird', 'sings', 'sweetly'], correct: 'The bird sings sweetly.'},
                {words: ['She', 'helps', 'her', 'mother'], correct: 'She helps her mother.'},
                {words: ['We', 'study', 'hard'], correct: 'We study hard.'},
                {words: ['The', 'flower', 'is', 'beautiful'], correct: 'The flower is beautiful.'}
            ];
            shuffleArray(jumbledSentences).slice(0, problemsPerExercise).forEach((item, idx) => {
                const shuffled = shuffleArray([...item.words]);
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Arrange: ${shuffled.join(' / ')}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Jumbled Words - Arrange to make a sentence:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'synonyms':
            const synonymPairs = [
                {word: 'happy', synonym: 'glad'}, {word: 'big', synonym: 'large'}, {word: 'small', synonym: 'tiny'},
                {word: 'fast', synonym: 'quick'}, {word: 'slow', synonym: 'sluggish'}, {word: 'hot', synonym: 'warm'},
                {word: 'cold', synonym: 'cool'}, {word: 'good', synonym: 'nice'}, {word: 'bad', synonym: 'evil'},
                {word: 'beautiful', synonym: 'pretty'}, {word: 'ugly', synonym: 'unattractive'}, {word: 'smart', synonym: 'clever'},
                {word: 'dumb', synonym: 'stupid'}, {word: 'brave', synonym: 'courageous'}, {word: 'afraid', synonym: 'scared'},
                {word: 'begin', synonym: 'start'}, {word: 'end', synonym: 'finish'}, {word: 'help', synonym: 'assist'},
                {word: 'huge', synonym: 'enormous'}, {word: 'tiny', synonym: 'small'}, {word: 'loud', synonym: 'noisy'}
            ];
            shuffleArray(synonymPairs).slice(0, problemsPerExercise).forEach((pair, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Synonym of "${pair.word}":`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Synonyms - Write a word with similar meaning (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'creative_writing':
            const writingPrompts = [
                'Write 2 sentences about your favorite animal:',
                'Write 2 sentences about your best friend:',
                'Write 2 sentences about your school:',
                'Write 2 sentences about your family:',
                'Write 2 sentences about a rainy day:',
                'Write 2 sentences about your pet:',
                'Write 2 sentences about your hobby:',
                'Write 2 sentences about your favorite food:',
                'Write 2 sentences about your favorite place:',
                'Write 2 sentences about your favorite game:',
                'Write 2 sentences about your teacher:',
                'Write 2 sentences about your favorite book:',
                'Write 2 sentences about your favorite color:',
                'Write 2 sentences about your favorite season:',
                'Write 2 sentences about your favorite festival:',
                'Write 2 sentences about your dream:',
                'Write 2 sentences about your favorite subject:',
                'Write 2 sentences about your favorite sport:',
                'Write 2 sentences about your favorite movie:',
                'Write 2 sentences about your favorite toy:'
            ];
            shuffleArray(writingPrompts).slice(0, problemsPerExercise).forEach((prompt, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${prompt}`,
                    boxClass: 'very-tall'
                });
            });
            html = '<div class="exercise-item english">';
            html += '<div class="question">Creative Writing - Write sentences:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'simple_sentences':
        case 'essay':
        case 'letter_writing':
            // Fallback for writing exercises
            for (let i = 0; i < problemsPerExercise; i++) {
                questions.push({
                    text: `<span class="question-number">${i + 1}.</span> Write a sentence:`,
                    boxClass: 'tall'
                });
            }
            html = '<div class="exercise-item english">';
            html += '<div class="question">Writing Practice:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        default:
            // Fallback for any unhandled English exercise type
            for (let i = 0; i < problemsPerExercise; i++) {
                questions.push({
                    text: `<span class="question-number">${i + 1}.</span> English question:`,
                    boxClass: ''
                });
            }
            html = '<div class="exercise-item english">';
            html += '<div class="question">English practice:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
    }
    
    return html;
}

// Generate Hindi Exercises (ensuring 20 problems each)
function generateHindiExercise(exercise, ageGroup, topic, difficulty = 'medium') {
    let html = '';
    const problemsPerExercise = 20; // 20 questions per page
    const questions = [];
    
    switch(exercise.type) {
        case 'hindi_alphabet':
            const hindiVowels = ['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ'];
            const hindiConsonants = ['क','ख','ग','घ','च','छ','ज','झ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','क्ष','त्र','ज्ञ'];
            const allHindi = [...hindiVowels, ...hindiConsonants];
            allHindi.slice(0, problemsPerExercise).forEach((letter, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Trace: ${letter}`,
                    boxClass: 'tall'
                });
            });
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">हिंदी वर्णमाला लिखें:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'hindi_vowels':
            const vowels = ['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','अं','अः'];
            vowels.slice(0, problemsPerExercise).forEach((vowel, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Trace: ${vowel}`,
                    boxClass: 'tall'
                });
            });
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">स्वर लिखें:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'hindi_consonants':
            const consonants = ['क','ख','ग','घ','च','छ','ज','झ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','क्ष','त्र','ज्ञ'];
            consonants.slice(0, problemsPerExercise).forEach((consonant, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Trace: ${consonant}`,
                    boxClass: 'tall'
                });
            });
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">व्यंजन लिखें:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'hindi_matras':
            const matras = ['ा','ि','ी','ु','ू','े','ै','ो','ौ','ं','ः'];
            matras.slice(0, problemsPerExercise).forEach((matra, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> मात्रा लिखें:`,
                    boxClass: 'tall'
                });
            });
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">मात्राएं लिखें:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'hindi_words':
            const hindiWords = ['कमल','पुस्तक','स्कूल','पानी','फूल','पेड़','पक्षी','मछली','गाड़ी','घर','किताब','पेन','मेज़','कुर्सी','खिड़की','दरवाज़ा','पानी','दूध','रोटी','चावल'];
            hindiWords.slice(0, problemsPerExercise).forEach((word, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Write: ${word}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">सरल शब्द लिखें:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'hindi_sentence_formation':
            const hindiSentenceWords = [
                ['मैं', 'स्कूल', 'जाता', 'हूं'],
                ['वह', 'पुस्तक', 'पढ़ता', 'है'],
                ['माँ', 'खाना', 'बनाती', 'है'],
                ['हम', 'खेल', 'खेलते', 'हैं'],
                ['सूरज', 'चमकता', 'है'],
                ['बच्चे', 'खेलते', 'हैं'],
                ['पक्षी', 'उड़ते', 'हैं'],
                ['फूल', 'खिलते', 'हैं'],
                ['बारिश', 'गिरती', 'है'],
                ['सूरज', 'निकलता', 'है']
            ];
            for (let i = 0; i < problemsPerExercise; i++) {
                const words = hindiSentenceWords[i % hindiSentenceWords.length];
                questions.push({
                    text: `<span class="question-number">${i + 1}.</span> Make sentence: ${words.join(' / ')}`,
                    boxClass: ''
                });
            }
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">वाक्य बनाएं:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'hindi_opposites':
            const hindiOpposites = [
                ['गर्म', 'ठंडा'], ['बड़ा', 'छोटा'], ['खुश', 'दुखी'], ['ऊपर', 'नीचे'],
                ['दिन', 'रात'], ['अच्छा', 'बुरा'], ['तेज', 'धीमा'], ['ऊंचा', 'नीचा'],
                ['उजाला', 'अंधेरा'], ['भरा', 'खाली'], ['सुंदर', 'बदसूरत'], ['मीठा', 'कड़वा'],
                ['सफेद', 'काला'], ['गीला', 'सूखा'], ['नरम', 'कठोर'], ['मोटा', 'पतला'],
                ['लंबा', 'छोटा'], ['चौड़ा', 'संकीर्ण'], ['जवान', 'बूढ़ा'], ['नया', 'पुराना']
            ];
            hindiOpposites.slice(0, problemsPerExercise).forEach((pair, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> विलोम of ${pair[0]}:`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">विलोम शब्द लिखें:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'hindi_nouns':
            const hindiNouns = ['लड़का','लड़की','स्कूल','पुस्तक','पेड़','फूल','पानी','घर','गाड़ी','पेड़','किताब','पेन','मेज़','कुर्सी','खिड़की','दरवाज़ा','पानी','दूध','रोटी','चावल'];
            hindiNouns.slice(0, problemsPerExercise).forEach((word, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> संज्ञा शब्द लिखें:`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">संज्ञा शब्द लिखें:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'hindi_nouns':
        case 'hindi_pronouns':
        case 'hindi_grammar':
        case 'hindi_nouns_types':
        case 'hindi_verbs_tenses':
        case 'hindi_paragraph':
        case 'hindi_letter':
        case 'hindi_word_formation':
            // Fallback for Hindi exercises
            for (let i = 0; i < problemsPerExercise; i++) {
                questions.push({
                    text: `<span class="question-number">${i + 1}.</span> हिंदी अभ्यास:`,
                    boxClass: ''
                });
            }
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">हिंदी अभ्यास:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        default:
            // Fallback for any unhandled Hindi exercise type
            for (let i = 0; i < problemsPerExercise; i++) {
                questions.push({
                    text: `<span class="question-number">${i + 1}.</span> हिंदी प्रश्न:`,
                    boxClass: ''
                });
            }
            html = '<div class="exercise-item hindi">';
            html += '<div class="question">हिंदी अभ्यास:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
    }
    
    return html;
}

// Generate GK Exercises (ensuring 20 problems each)
function generateGKExercise(exercise, ageGroup, topic, difficulty = 'medium') {
    let html = '';
    const problemsPerExercise = 20; // 20 questions per page
    const questions = [];
    
    switch(exercise.type) {
        case 'colors':
            const colorQuestions = [
                {q: 'What color is the sun?', a: 'yellow'},
                {q: 'What color is grass?', a: 'green'},
                {q: 'What color is the sky?', a: 'blue'},
                {q: 'What color is an apple?', a: 'red'},
                {q: 'What color is snow?', a: 'white'},
                {q: 'What color is a banana?', a: 'yellow'},
                {q: 'What color is a carrot?', a: 'orange'},
                {q: 'What color is coal?', a: 'black'},
                {q: 'What color is a rose?', a: 'red'},
                {q: 'What color is milk?', a: 'white'},
                {q: 'What color is a tomato?', a: 'red'},
                {q: 'What color is the ocean?', a: 'blue'},
                {q: 'What color is a leaf?', a: 'green'},
                {q: 'What color is chocolate?', a: 'brown'},
                {q: 'What color is a strawberry?', a: 'red'},
                {q: 'What color is a lemon?', a: 'yellow'},
                {q: 'What color is a grape?', a: 'purple'},
                {q: 'What color is fire?', a: 'red'},
                {q: 'What color is a cloud?', a: 'white'},
                {q: 'What color is a tree trunk?', a: 'brown'}
            ];
            shuffleArray(colorQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the colors (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'animals':
            const animalQuestions = [
                {q: '🐱 Name this animal:', a: 'cat'},
                {q: '🐶 Name this animal:', a: 'dog'},
                {q: '🐮 Name this animal:', a: 'cow'},
                {q: '🐯 Name this animal:', a: 'tiger'},
                {q: '🦁 Name this animal:', a: 'lion'},
                {q: '🐘 Name this animal:', a: 'elephant'},
                {q: '🐵 Name this animal:', a: 'monkey'},
                {q: '🐻 Name this animal:', a: 'bear'},
                {q: '🐰 Name this animal:', a: 'rabbit'},
                {q: '🐴 Name this animal:', a: 'horse'},
                {q: '🐷 Name this animal:', a: 'pig'},
                {q: '🐔 Name this animal:', a: 'chicken'},
                {q: '🐤 Name this animal:', a: 'duck'},
                {q: '🐸 Name this animal:', a: 'frog'},
                {q: '🐢 Name this animal:', a: 'turtle'},
                {q: '🐍 Name this animal:', a: 'snake'},
                {q: '🐦 Name this animal:', a: 'bird'},
                {q: '🐭 Name this animal:', a: 'mouse'},
                {q: '🐼 Name this animal:', a: 'panda'},
                {q: '🦊 Name this animal:', a: 'fox'}
            ];
            shuffleArray(animalQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the animals (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'countries':
            const countries = [
                ['India', 'New Delhi'], ['USA', 'Washington'], ['UK', 'London'],
                ['China', 'Beijing'], ['Japan', 'Tokyo'], ['Australia', 'Canberra'],
                ['France', 'Paris'], ['Germany', 'Berlin'], ['Canada', 'Ottawa'],
                ['Brazil', 'Brasilia'], ['Russia', 'Moscow'], ['Italy', 'Rome'],
                ['Spain', 'Madrid'], ['Mexico', 'Mexico City'], ['South Africa', 'Cape Town'],
                ['Egypt', 'Cairo'], ['Argentina', 'Buenos Aires'], ['Chile', 'Santiago'],
                ['Thailand', 'Bangkok'], ['Singapore', 'Singapore']
            ];
            shuffleArray(countries).slice(0, problemsPerExercise).forEach((country, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Capital of ${country[0]}:`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the capitals (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'body_parts':
            const bodyParts = ['head', 'eye', 'nose', 'ear', 'mouth', 'hand', 'foot', 'leg', 'arm', 'finger', 'toe', 'hair', 'tooth', 'knee', 'elbow', 'shoulder', 'chest', 'back', 'stomach', 'neck'];
            shuffleArray(bodyParts).slice(0, problemsPerExercise).forEach((part, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Name this body part: [point to ${part}]`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the body parts (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'fruits':
            const fruitQuestions = [
                {q: '🍎 Name this fruit:', a: 'apple'},
                {q: '🍌 Name this fruit:', a: 'banana'},
                {q: '🍊 Name this fruit:', a: 'orange'},
                {q: '🍇 Name this fruit:', a: 'grapes'},
                {q: '🍓 Name this fruit:', a: 'strawberry'},
                {q: '🍉 Name this fruit:', a: 'watermelon'},
                {q: '🍑 Name this fruit:', a: 'peach'},
                {q: '🍒 Name this fruit:', a: 'cherry'},
                {q: '🥭 Name this fruit:', a: 'mango'},
                {q: '🍍 Name this fruit:', a: 'pineapple'},
                {q: '🥝 Name this fruit:', a: 'kiwi'},
                {q: '🍐 Name this fruit:', a: 'pear'},
                {q: '🍋 Name this fruit:', a: 'lemon'},
                {q: '🥥 Name this fruit:', a: 'coconut'},
                {q: '🫐 Name this fruit:', a: 'blueberry'},
                {q: '🍈 Name this fruit:', a: 'melon'},
                {q: '🍏 Name this fruit:', a: 'apple'},
                {q: '🥑 Name this fruit:', a: 'avocado'},
                {q: '🍅 Name this fruit:', a: 'tomato'},
                {q: '🫒 Name this fruit:', a: 'olive'}
            ];
            shuffleArray(fruitQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the fruits (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'vegetables':
            const vegetableQuestions = [
                {q: '🥕 Name this vegetable:', a: 'carrot'},
                {q: '🥔 Name this vegetable:', a: 'potato'},
                {q: '🍅 Name this vegetable:', a: 'tomato'},
                {q: '🥒 Name this vegetable:', a: 'cucumber'},
                {q: '🥬 Name this vegetable:', a: 'cabbage'},
                {q: '🥦 Name this vegetable:', a: 'broccoli'},
                {q: '🌽 Name this vegetable:', a: 'corn'},
                {q: '🫑 Name this vegetable:', a: 'pepper'},
                {q: '🧅 Name this vegetable:', a: 'onion'},
                {q: '🧄 Name this vegetable:', a: 'garlic'},
                {q: '🥑 Name this vegetable:', a: 'avocado'},
                {q: '🍆 Name this vegetable:', a: 'eggplant'},
                {q: '🌶️ Name this vegetable:', a: 'chili'},
                {q: '🥗 Name this vegetable:', a: 'lettuce'},
                {q: '🫛 Name this vegetable:', a: 'peas'},
                {q: '🥜 Name this vegetable:', a: 'peanut'},
                {q: '🫘 Name this vegetable:', a: 'beans'},
                {q: '🌰 Name this vegetable:', a: 'chestnut'},
                {q: '🥔 Name this vegetable:', a: 'potato'},
                {q: '🍠 Name this vegetable:', a: 'sweetpotato'}
            ];
            shuffleArray(vegetableQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the vegetables (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'planets':
            const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
            const planetQuestions = planets.map(p => ({q: `Name the planet: ${p}`, a: p}));
            // Repeat to get 20 questions
            while (planetQuestions.length < problemsPerExercise) {
                planetQuestions.push(...planetQuestions.slice(0, problemsPerExercise - planetQuestions.length));
            }
            shuffleArray(planetQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the planets (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'days_weeks':
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            const dayQuestions = [
                {q: 'First day of the week:', a: 'Monday'},
                {q: 'Second day of the week:', a: 'Tuesday'},
                {q: 'Third day of the week:', a: 'Wednesday'},
                {q: 'Fourth day of the week:', a: 'Thursday'},
                {q: 'Fifth day of the week:', a: 'Friday'},
                {q: 'Sixth day of the week:', a: 'Saturday'},
                {q: 'Seventh day of the week:', a: 'Sunday'},
                {q: 'Day after Monday:', a: 'Tuesday'},
                {q: 'Day before Friday:', a: 'Thursday'},
                {q: 'Weekend day:', a: 'Saturday'},
                {q: 'Day that starts with "W":', a: 'Wednesday'},
                {q: 'Day that starts with "T":', a: 'Tuesday'},
                {q: 'Last day of the week:', a: 'Sunday'},
                {q: 'First weekday:', a: 'Monday'},
                {q: 'Day in the middle of the week:', a: 'Wednesday'},
                {q: 'Day after Wednesday:', a: 'Thursday'},
                {q: 'Day before Sunday:', a: 'Saturday'},
                {q: 'Day that starts with "F":', a: 'Friday'},
                {q: 'Day after Friday:', a: 'Saturday'},
                {q: 'Day before Monday:', a: 'Sunday'}
            ];
            // If part of "Days & Months", generate 10 questions, otherwise 20
            const daysCount = topic === 'Days & Months' ? 10 : problemsPerExercise;
            shuffleArray(dayQuestions).slice(0, daysCount).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the days of the week (one word answer):</div>';
            html += formatQuestionsTable(questions, daysCount);
            html += '</div>';
            break;
            
        case 'months':
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const monthQuestions = [
                {q: 'First month of the year:', a: 'January'},
                {q: 'Second month of the year:', a: 'February'},
                {q: 'Third month of the year:', a: 'March'},
                {q: 'Fourth month of the year:', a: 'April'},
                {q: 'Fifth month of the year:', a: 'May'},
                {q: 'Sixth month of the year:', a: 'June'},
                {q: 'Seventh month of the year:', a: 'July'},
                {q: 'Eighth month of the year:', a: 'August'},
                {q: 'Ninth month of the year:', a: 'September'},
                {q: 'Tenth month of the year:', a: 'October'},
                {q: 'Eleventh month of the year:', a: 'November'},
                {q: 'Twelfth month of the year:', a: 'December'},
                {q: 'Month with 31 days:', a: 'January'},
                {q: 'Shortest month:', a: 'February'},
                {q: 'Month that starts with "M":', a: 'March'},
                {q: 'Month after March:', a: 'April'},
                {q: 'Month before July:', a: 'June'},
                {q: 'Last month of the year:', a: 'December'},
                {q: 'Month with spring:', a: 'March'},
                {q: 'Month with Christmas:', a: 'December'}
            ];
            // If part of "Days & Months", generate 10 questions, otherwise 20
            const monthsCount = topic === 'Days & Months' ? 10 : problemsPerExercise;
            shuffleArray(monthQuestions).slice(0, monthsCount).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the months (one word answer):</div>';
            html += formatQuestionsTable(questions, monthsCount);
            html += '</div>';
            break;
            
        case 'states_india':
            const indianStates = [
                ['Maharashtra', 'Mumbai'], ['Karnataka', 'Bangalore'], ['Tamil Nadu', 'Chennai'],
                ['Gujarat', 'Gandhinagar'], ['Rajasthan', 'Jaipur'], ['Punjab', 'Chandigarh'],
                ['West Bengal', 'Kolkata'], ['Bihar', 'Patna'], ['Uttar Pradesh', 'Lucknow'],
                ['Kerala', 'Thiruvananthapuram'], ['Andhra Pradesh', 'Hyderabad'], ['Telangana', 'Hyderabad'],
                ['Madhya Pradesh', 'Bhopal'], ['Odisha', 'Bhubaneswar'], ['Assam', 'Dispur'],
                ['Haryana', 'Chandigarh'], ['Jharkhand', 'Ranchi'], ['Chhattisgarh', 'Raipur'],
                ['Himachal Pradesh', 'Shimla'], ['Uttarakhand', 'Dehradun']
            ];
            shuffleArray(indianStates).slice(0, problemsPerExercise).forEach((state, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> Capital of ${state[0]}:`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name Indian state capitals (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'rivers':
            const rivers = ['Ganges', 'Yamuna', 'Godavari', 'Krishna', 'Narmada', 'Indus', 'Brahmaputra', 'Mahanadi', 'Kaveri', 'Tapti'];
            const riverQuestions = rivers.map(r => ({q: `Name this Indian river: ${r}`, a: r}));
            while (riverQuestions.length < problemsPerExercise) {
                riverQuestions.push(...riverQuestions);
            }
            shuffleArray(riverQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the rivers (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'mountains':
            const mountains = ['Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu', 'Cho Oyu', 'Annapurna', 'Dhaulagiri', 'Manaslu', 'Nanga Parbat'];
            const mountainQuestions = mountains.map(m => ({q: `Name this mountain: ${m}`, a: m}));
            while (mountainQuestions.length < problemsPerExercise) {
                mountainQuestions.push(...mountainQuestions);
            }
            shuffleArray(mountainQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the mountains (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'transport':
            const transportQuestions = [
                {q: '🚗 Name this vehicle:', a: 'car'},
                {q: '🚌 Name this vehicle:', a: 'bus'},
                {q: '🚂 Name this vehicle:', a: 'train'},
                {q: '✈️ Name this vehicle:', a: 'airplane'},
                {q: '🚢 Name this vehicle:', a: 'ship'},
                {q: '🚲 Name this vehicle:', a: 'bicycle'},
                {q: '🏍️ Name this vehicle:', a: 'motorcycle'},
                {q: '🚑 Name this vehicle:', a: 'ambulance'},
                {q: '🚒 Name this vehicle:', a: 'firetruck'},
                {q: '🚓 Name this vehicle:', a: 'policecar'},
                {q: '🚛 Name this vehicle:', a: 'truck'},
                {q: '🚜 Name this vehicle:', a: 'tractor'},
                {q: '🚁 Name this vehicle:', a: 'helicopter'},
                {q: '🚤 Name this vehicle:', a: 'speedboat'},
                {q: '🚇 Name this vehicle:', a: 'metro'},
                {q: '🚊 Name this vehicle:', a: 'tram'},
                {q: '🛴 Name this vehicle:', a: 'scooter'},
                {q: '🛵 Name this vehicle:', a: 'motorbike'},
                {q: '🚎 Name this vehicle:', a: 'trolleybus'},
                {q: '🚐 Name this vehicle:', a: 'van'}
            ];
            shuffleArray(transportQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the vehicles (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'seasons':
            const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
            const seasonQuestions = [
                'Season with flowers blooming:',
                'Hottest season:',
                'Season with falling leaves:',
                'Coldest season:'
            ];
            while (seasonQuestions.length < problemsPerExercise) {
                seasonQuestions.push(...seasonQuestions);
            }
            seasonQuestions.slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the seasons (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'festivals':
            const festivals = ['Diwali', 'Holi', 'Eid', 'Christmas', 'Dussehra', 'Raksha Bandhan', 'Independence Day', 'Republic Day', 'Gandhi Jayanti', 'Onam'];
            const festivalQuestions = festivals.map(f => ({q: `Name this festival: ${f}`, a: f}));
            while (festivalQuestions.length < problemsPerExercise) {
                festivalQuestions.push(...festivalQuestions);
            }
            shuffleArray(festivalQuestions).slice(0, problemsPerExercise).forEach((item, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${item.q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Name the festivals (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'world_geography':
            const worldGeoQuestions = [
                'Largest continent:',
                'Smallest continent:',
                'Largest ocean:',
                'Smallest ocean:',
                'Tallest mountain:',
                'Longest river:',
                'Largest desert:',
                'Coldest continent:',
                'Hottest continent:',
                'Most populated country:',
                'Largest country:',
                'Smallest country:',
                'Country with most languages:',
                'Island country in Asia:',
                'Country shaped like a boot:',
                'Country with most time zones:',
                'Largest island:',
                'Deepest ocean:',
                'Widest waterfall:',
                'Longest coastline:'
            ];
            shuffleArray(worldGeoQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">World Geography (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'indian_geography':
            const indianGeoQuestions = [
                'Longest river in India:',
                'Highest mountain in India:',
                'Largest state in India:',
                'Smallest state in India:',
                'Capital of India:',
                'National animal of India:',
                'National bird of India:',
                'National flower of India:',
                'National tree of India:',
                'How many states in India?',
                'How many union territories?',
                'Largest city in India:',
                'Southernmost state:',
                'Northernmost state:',
                'Easternmost state:',
                'Westernmost state:',
                'State with most population:',
                'State with most area:',
                'Island union territory:',
                'Desert in India:'
            ];
            shuffleArray(indianGeoQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Indian Geography (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'history':
            const historyQuestions = [
                'First Prime Minister of India:',
                'Father of the Nation:',
                'Year India got independence:',
                'Year India became a republic:',
                'First woman Prime Minister:',
                'First President of India:',
                'First man on the moon:',
                'First person to reach South Pole:',
                'First person to climb Mount Everest:',
                'First Indian in space:',
                'First woman in space:',
                'First computer:',
                'First airplane:',
                'First telephone:',
                'First television:',
                'First car:',
                'First train:',
                'First bicycle:',
                'First camera:',
                'First printing press:'
            ];
            shuffleArray(historyQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">History (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'science_facts':
            const scienceQuestions = [
                'How many planets in solar system?',
                'Closest planet to sun:',
                'Farthest planet from sun:',
                'Largest planet:',
                'Smallest planet:',
                'Planet with rings:',
                'Red planet:',
                'Planet we live on:',
                'How many bones in human body?',
                'Largest organ in body:',
                'What do plants make?',
                'What do we breathe in?',
                'What do we breathe out?',
                'How many legs does a spider have?',
                'How many legs does a cat have?',
                'What do bees make?',
                'What do birds lay?',
                'What do fish live in?',
                'What do plants need to grow?',
                'What is the sun?'
            ];
            shuffleArray(scienceQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Science Facts (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'inventions':
            const inventionQuestions = [
                'Who invented the telephone?',
                'Who invented the light bulb?',
                'Who invented the computer?',
                'Who invented the airplane?',
                'Who invented the car?',
                'Who invented the radio?',
                'Who invented the television?',
                'Who invented the camera?',
                'Who invented the printing press?',
                'Who invented the wheel?',
                'Who discovered gravity?',
                'Who discovered electricity?',
                'Who discovered penicillin?',
                'Who invented the internet?',
                'Who invented the mobile phone?',
                'Who invented the bicycle?',
                'Who invented the train?',
                'Who invented the ship?',
                'Who invented the clock?',
                'Who invented the compass?'
            ];
            shuffleArray(inventionQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Inventions (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'famous_personalities':
            const personalityQuestions = [
                'First Prime Minister of India:',
                'Father of the Nation:',
                'First President of India:',
                'First woman Prime Minister:',
                'Current Prime Minister:',
                'First man on the moon:',
                'First Indian in space:',
                'First woman in space:',
                'Who wrote "Romeo and Juliet"?',
                'Who painted the Mona Lisa?',
                'Who discovered gravity?',
                'Who invented the telephone?',
                'Who invented the light bulb?',
                'Who wrote "Harry Potter"?',
                'Who discovered India?',
                'Who built the Taj Mahal?',
                'Who was the first woman to climb Mount Everest?',
                'Who invented the computer?',
                'Who discovered America?',
                'Who was the first woman Prime Minister?'
            ];
            shuffleArray(personalityQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Famous Personalities (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'current_affairs':
            const currentAffairsQuestions = [
                'Current year:',
                'How many days in a year?',
                'How many months in a year?',
                'How many weeks in a year?',
                'How many days in a week?',
                'How many hours in a day?',
                'How many minutes in an hour?',
                'How many seconds in a minute?',
                'What is the capital of India?',
                'What is the currency of India?',
                'What is the national language?',
                'What is the national sport?',
                'What is the national animal?',
                'What is the national bird?',
                'What is the national flower?',
                'What is the national tree?',
                'How many states in India?',
                'How many union territories?',
                'What is the largest state?',
                'What is the smallest state?'
            ];
            shuffleArray(currentAffairsQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Current Affairs (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        case 'scientists':
            const scientistQuestions = [
                'Who discovered gravity?',
                'Who discovered electricity?',
                'Who discovered penicillin?',
                'Who discovered radium?',
                'Who discovered the structure of DNA?',
                'Who discovered X-rays?',
                'Who discovered the theory of relativity?',
                'Who discovered the periodic table?',
                'Who discovered the law of motion?',
                'Who discovered the speed of light?',
                'Who discovered the atom?',
                'Who discovered the electron?',
                'Who discovered the neutron?',
                'Who discovered the proton?',
                'Who discovered the telescope?',
                'Who discovered the microscope?',
                'Who discovered the vaccine?',
                'Who discovered the blood groups?',
                'Who discovered the circulation of blood?',
                'Who discovered the cell?'
            ];
            shuffleArray(scientistQuestions).slice(0, problemsPerExercise).forEach((q, idx) => {
                questions.push({
                    text: `<span class="question-number">${idx + 1}.</span> ${q}`,
                    boxClass: ''
                });
            });
            html = '<div class="exercise-item gk">';
            html += '<div class="question">Scientists (one word answer):</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
            
        default:
            // Fallback for any unhandled GK exercise type
            for (let i = 0; i < problemsPerExercise; i++) {
                questions.push({
                    text: `<span class="question-number">${i + 1}.</span> GK question:`,
                    boxClass: ''
                });
            }
            html = '<div class="exercise-item gk">';
            html += '<div class="question">General Knowledge:</div>';
            html += formatQuestionsTable(questions, problemsPerExercise);
            html += '</div>';
            break;
    }
    
    return html;
}

// Main worksheet generation function
function generateWorksheet() {
    const ageGroup = document.getElementById('ageGroup').value;
    const subject = document.getElementById('subject').value;
    const topic = document.getElementById('topic').value;
    const difficulty = document.getElementById('difficulty').value;
    const randomMode = document.getElementById('randomMode').checked;
    
    const worksheetContainer = document.getElementById('worksheetContainer');
    const worksheet = document.getElementById('worksheet');
    const printBtn = document.getElementById('printBtn');
    
    worksheet.innerHTML = '';
    
    // Handle random mode
    let selectedSubject = subject;
    let selectedTopic = topic;
    let selectedDifficulty = difficulty;
    let selectedAgeGroup = ageGroup;
    
    if (randomMode) {
        const subjects = ['math', 'english', 'hindi', 'gk'];
        selectedSubject = subjects[randomInt(0, subjects.length - 1)];
        if (icseTopics[selectedSubject] && icseTopics[selectedSubject][ageGroup]) {
            const topics = icseTopics[selectedSubject][ageGroup];
            selectedTopic = topics[randomInt(0, topics.length - 1)];
        }
        selectedDifficulty = ['easy', 'medium', 'hard'][randomInt(0, 2)];
    }
    
    const subjectNames = {
        'math': 'Mathematics',
        'english': 'English',
        'hindi': 'Hindi',
        'gk': 'General Knowledge',
        'mixed': 'Mixed Subjects'
    };
    
    worksheet.innerHTML = `
        <div class="worksheet-header">
            <h2>${subjectNames[selectedSubject]} Worksheet</h2>
            <div class="info">Age Group: ${selectedAgeGroup} years | Difficulty: ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}</div>
            <div class="info">Topic: ${selectedTopic === 'all' ? 'Mixed Topics' : selectedTopic}</div>
            <div class="info">Student Name: ___________________ Date: ___________</div>
        </div>
    `;
    
    // Get exercises - ensure we always have at least one exercise that generates 20 questions
    let exerciseList = [];
    let fallbackExercise = null;
    
    // Handle mixed subjects
    if (selectedSubject === 'mixed') {
        const subjects = ['math', 'english', 'hindi', 'gk'];
        const randomSubject = subjects[randomInt(0, subjects.length - 1)];
        selectedSubject = randomSubject;
    }
    
    if (selectedTopic === 'all' || randomMode) {
        // Get all exercises for the subject and age group
        if (exercises[selectedSubject] && exercises[selectedSubject][selectedAgeGroup]) {
            const allTopics = Object.keys(exercises[selectedSubject][selectedAgeGroup]);
            if (allTopics.length > 0) {
                const topicsToUse = randomMode ? 
                    [allTopics[randomInt(0, allTopics.length - 1)]] : 
                    shuffleArray(allTopics).slice(0, Math.min(3, allTopics.length));
                
                topicsToUse.forEach(topicKey => {
                    const topicExercises = exercises[selectedSubject][selectedAgeGroup][topicKey];
                    if (Array.isArray(topicExercises) && topicExercises.length > 0) {
                        exerciseList = exerciseList.concat(topicExercises);
                    } else if (topicExercises && !Array.isArray(topicExercises)) {
                        exerciseList.push(topicExercises);
                    }
                });
            }
        }
    } else {
        // Get exercises for specific topic
        if (exercises[selectedSubject] && exercises[selectedSubject][selectedAgeGroup]) {
            // Try exact match first
            let topicExercises = exercises[selectedSubject][selectedAgeGroup][selectedTopic];
            
            // If not found, try to find by partial match (for topics with variations)
            if (!topicExercises) {
                const allTopics = Object.keys(exercises[selectedSubject][selectedAgeGroup]);
                const matchingTopic = allTopics.find(t => 
                    t.toLowerCase().includes(selectedTopic.toLowerCase()) || 
                    selectedTopic.toLowerCase().includes(t.toLowerCase())
                );
                if (matchingTopic) {
                    topicExercises = exercises[selectedSubject][selectedAgeGroup][matchingTopic];
                }
            }
            
            if (topicExercises) {
                if (Array.isArray(topicExercises) && topicExercises.length > 0) {
                    exerciseList = topicExercises;
                } else if (!Array.isArray(topicExercises)) {
                    exerciseList = [topicExercises];
                }
            }
        }
    }
    
    // Create fallback exercises if no exercises found - comprehensive fallbacks
    if (exerciseList.length === 0) {
        if (selectedSubject === 'math') {
            // Age-appropriate math fallbacks
            if (selectedAgeGroup === '4-5') {
                fallbackExercise = { type: 'addition', problems: 20, max: 10, digits: 1 };
            } else if (selectedAgeGroup === '6-7') {
                fallbackExercise = { type: 'addition', problems: 20, max: 50, digits: 2 };
            } else {
                fallbackExercise = { type: 'addition', problems: 20, max: 200, digits: 3 };
            }
        } else if (selectedSubject === 'english') {
            // Age-appropriate English fallbacks
            if (selectedAgeGroup === '4-5') {
                fallbackExercise = { type: 'alphabet_tracing', letters: 'all' };
            } else if (selectedAgeGroup === '6-7') {
                fallbackExercise = { type: 'spelling', words: ['house','water','flower','school','friend','happy','beautiful','important','different','together','because','always','sometimes','usually','quickly','slowly','carefully','quietly','loudly','brightly'] };
            } else {
                fallbackExercise = { type: 'spelling', words: ['beautiful','important','different','together','because','always','sometimes','usually','quickly','slowly','carefully','quietly','loudly','brightly','suddenly','finally','exactly','completely','especially','certainly'] };
            }
        } else if (selectedSubject === 'hindi') {
            // Age-appropriate Hindi fallbacks
            if (selectedAgeGroup === '4-5') {
                fallbackExercise = { type: 'hindi_alphabet', letters: 'all' };
            } else if (selectedAgeGroup === '6-7') {
                fallbackExercise = { type: 'hindi_words', count: 20 };
            } else {
                fallbackExercise = { type: 'hindi_sentence_formation', count: 20 };
            }
        } else if (selectedSubject === 'gk') {
            // Age-appropriate GK fallbacks
            if (selectedAgeGroup === '4-5') {
                fallbackExercise = { type: 'colors', count: 20 };
            } else if (selectedAgeGroup === '6-7') {
                fallbackExercise = { type: 'animals', category: 'all' };
            } else {
                fallbackExercise = { type: 'countries', count: 20 };
            }
        }
        if (fallbackExercise) {
            exerciseList = [fallbackExercise];
        }
    }
    
    // Generate exercises - ensure at least one exercise with 20 questions
    if (exerciseList.length > 0) {
        // For topics with multiple exercises (like "Days & Months"), combine them
        // Otherwise use the first exercise
        let exercisesToGenerate = exerciseList;
        
        // Special handling for "Days & Months" - combine both types to get 20 total questions
        if (selectedTopic === 'Days & Months' && exerciseList.length >= 2) {
            // Generate both days and months, 10 questions each = 20 total
            exercisesToGenerate = exerciseList.slice(0, 2);
        } else {
            // Use first exercise for 20 questions
            exercisesToGenerate = [exerciseList[0]];
        }
        
        exercisesToGenerate.forEach((exercise, index) => {
            let exerciseHtml = '';
            
            if (selectedSubject === 'math') {
                exerciseHtml = generateMathExercise(exercise, selectedAgeGroup, selectedTopic, selectedDifficulty);
            } else if (selectedSubject === 'english') {
                exerciseHtml = generateEnglishExercise(exercise, selectedAgeGroup, selectedTopic, selectedDifficulty);
            } else if (selectedSubject === 'hindi') {
                exerciseHtml = generateHindiExercise(exercise, selectedAgeGroup, selectedTopic, selectedDifficulty);
            } else if (selectedSubject === 'gk') {
                exerciseHtml = generateGKExercise(exercise, selectedAgeGroup, selectedTopic, selectedDifficulty);
            }
            
            if (exerciseHtml) {
                const exerciseTitle = selectedTopic === 'all' ? 
                    `Mixed Exercises ${index + 1}` : 
                    (selectedTopic === 'Days & Months' ? 
                        (index === 0 ? 'Days of the Week' : 'Months of the Year') : 
                        selectedTopic);
                
                worksheet.innerHTML += `
                    <div class="exercise-section">
                        <div class="exercise-title">${exerciseTitle}</div>
                        ${exerciseHtml}
                    </div>
                `;
            }
        });
        
        // If no exercises generated, try fallback
        if (!worksheet.innerHTML.includes('exercise-section') && fallbackExercise) {
            let exerciseHtml = '';
            if (selectedSubject === 'math') {
                exerciseHtml = generateMathExercise(fallbackExercise, selectedAgeGroup, selectedTopic, selectedDifficulty);
            } else if (selectedSubject === 'english') {
                exerciseHtml = generateEnglishExercise(fallbackExercise, selectedAgeGroup, selectedTopic, selectedDifficulty);
            } else if (selectedSubject === 'hindi') {
                exerciseHtml = generateHindiExercise(fallbackExercise, selectedAgeGroup, selectedTopic, selectedDifficulty);
            } else if (selectedSubject === 'gk') {
                exerciseHtml = generateGKExercise(fallbackExercise, selectedAgeGroup, selectedTopic, selectedDifficulty);
            }
            if (exerciseHtml) {
                worksheet.innerHTML += `
                    <div class="exercise-section">
                        <div class="exercise-title">Practice Exercises</div>
                        ${exerciseHtml}
                    </div>
                `;
            }
        }
    }
    
    // If still no exercises generated, show message
    if (!worksheet.innerHTML.includes('exercise-section')) {
        worksheet.innerHTML += '<div style="padding: 20px; text-align: center; color: #666;">No exercises available for this selection. Please try a different combination.</div>';
    }
    
    worksheetContainer.style.display = 'block';
    printBtn.style.display = 'inline-block';
    worksheetContainer.scrollIntoView({ behavior: 'smooth' });
}

// Print function
function printWorksheet() {
    window.print();
}

// Firebase Service (with localStorage fallback)
let db = null;
let firebaseInitialized = false;

// Initialize Firebase
function initFirebase() {
    try {
        if (typeof firebase !== 'undefined' && firebaseConfig && firebaseConfig.apiKey !== 'YOUR_API_KEY') {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            firebaseInitialized = true;
            console.log('✅ Firebase initialized successfully');
            return true;
        } else {
            console.log('⚠️ Firebase not configured, using localStorage fallback');
            return false;
        }
    } catch (error) {
        console.error('❌ Firebase initialization error:', error);
        return false;
    }
}

// Initialize Firebase on page load
if (typeof firebase !== 'undefined') {
    initFirebase();
}

// Feedback and Signup Functions
const BASE_THUMBS_COUNT = 86; // Base count from existing users
let currentThumbsCount = BASE_THUMBS_COUNT;

// Load thumbs count from Firebase or localStorage
async function loadThumbsCount() {
    if (firebaseInitialized && db) {
        try {
            const doc = await db.collection('stats').doc('thumbsUp').get();
            if (doc.exists) {
                currentThumbsCount = doc.data().count || BASE_THUMBS_COUNT;
            } else {
                // Initialize with base count
                await db.collection('stats').doc('thumbsUp').set({ count: BASE_THUMBS_COUNT });
                currentThumbsCount = BASE_THUMBS_COUNT;
            }
            updateThumbsCount();
        } catch (error) {
            console.error('Error loading thumbs count:', error);
            // Fallback to localStorage
            const localCount = parseInt(localStorage.getItem('thumbsUpCount') || BASE_THUMBS_COUNT.toString());
            currentThumbsCount = localCount;
            updateThumbsCount();
        }
    } else {
        // Use localStorage fallback
        const localCount = parseInt(localStorage.getItem('thumbsUpCount') || BASE_THUMBS_COUNT.toString());
        currentThumbsCount = localCount;
        updateThumbsCount();
    }
}

function updateThumbsCount() {
    document.getElementById('thumbsCount').textContent = currentThumbsCount;
}

async function handleThumbsUp() {
    const thumbsBtn = document.getElementById('thumbsUp');
    if (!thumbsBtn.classList.contains('active')) {
        currentThumbsCount++;
        thumbsBtn.classList.add('active');
        localStorage.setItem('thumbsUpGiven', 'true');
        updateThumbsCount();
        
        // Save to Firebase or localStorage
        if (firebaseInitialized && db) {
            try {
                await db.collection('stats').doc('thumbsUp').set({ 
                    count: currentThumbsCount,
                    lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
                
                // Also save individual click for analytics
                await db.collection('thumbsUpClicks').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    userAgent: navigator.userAgent,
                    date: new Date().toISOString()
                });
                
                console.log('✅ Thumbs up saved to Firebase');
            } catch (error) {
                console.error('Error saving to Firebase:', error);
                // Fallback to localStorage
                localStorage.setItem('thumbsUpCount', currentThumbsCount.toString());
            }
        } else {
            // Use localStorage fallback
            localStorage.setItem('thumbsUpCount', currentThumbsCount.toString());
        }
        
        // Show thank you message
        const message = document.createElement('div');
        message.textContent = 'Thank you for your support! 💚';
        message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 15px 25px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); z-index: 10000; animation: slideIn 0.3s;';
        document.body.appendChild(message);
        setTimeout(() => {
            message.style.animation = 'slideOut 0.3s';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }
}

async function handleFeedbackSubmit(e) {
    e.preventDefault();
    const feedbackText = document.getElementById('feedbackText').value.trim();
    
    if (!feedbackText) {
        alert('Please enter your feedback before submitting.');
        return;
    }
    
    const feedbackEntry = {
        text: feedbackText,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString(),
        userAgent: navigator.userAgent
    };
    
    // Save to Firebase or localStorage
    if (firebaseInitialized && db) {
        try {
            await db.collection('feedbacks').add({
                text: feedbackText,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                date: new Date().toLocaleString(),
                userAgent: navigator.userAgent
            });
            console.log('✅ Feedback saved to Firebase');
        } catch (error) {
            console.error('Error saving feedback to Firebase:', error);
            // Fallback to localStorage
            const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
            feedbacks.push(feedbackEntry);
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        }
    } else {
        // Use localStorage fallback
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
        feedbacks.push(feedbackEntry);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        console.log('Feedback saved to localStorage');
    }
    
    // Show success message
    const message = document.createElement('div');
    message.textContent = 'Thank you for your feedback! We appreciate it! 🙏';
    message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 15px 25px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); z-index: 10000; animation: slideIn 0.3s;';
    document.body.appendChild(message);
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s';
        setTimeout(() => message.remove(), 300);
    }, 3000);
    
    // Clear form
    document.getElementById('feedbackText').value = '';
}

async function handleSignupSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value.trim();
    const messageDiv = document.getElementById('signupMessage');
    
    if (!email || !email.includes('@')) {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.className = 'signup-message error';
        messageDiv.style.display = 'block';
        return;
    }
    
    const signupEntry = {
        email: email,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString(),
        userAgent: navigator.userAgent
    };
    
    // Check if email already exists and save to Firebase or localStorage
    if (firebaseInitialized && db) {
        try {
            // Check if email already exists
            const existingSignups = await db.collection('signups')
                .where('email', '==', email)
                .get();
            
            if (!existingSignups.empty) {
                messageDiv.textContent = 'This email is already subscribed!';
                messageDiv.className = 'signup-message error';
                messageDiv.style.display = 'block';
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 3000);
                return;
            }
            
            // Save to Firebase
            await db.collection('signups').add({
                email: email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                date: new Date().toLocaleString(),
                userAgent: navigator.userAgent
            });
            console.log('✅ Email signup saved to Firebase');
        } catch (error) {
            console.error('Error saving signup to Firebase:', error);
            // Fallback to localStorage
            const signups = JSON.parse(localStorage.getItem('signups') || '[]');
            if (!signups.some(entry => entry.email === email)) {
                signups.push(signupEntry);
                localStorage.setItem('signups', JSON.stringify(signups));
            } else {
                messageDiv.textContent = 'This email is already subscribed!';
                messageDiv.className = 'signup-message error';
                messageDiv.style.display = 'block';
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 3000);
                return;
            }
        }
    } else {
        // Use localStorage fallback
        const signups = JSON.parse(localStorage.getItem('signups') || '[]');
        if (!signups.some(entry => entry.email === email)) {
            signups.push(signupEntry);
            localStorage.setItem('signups', JSON.stringify(signups));
            console.log('Email signup saved to localStorage');
        } else {
            messageDiv.textContent = 'This email is already subscribed!';
            messageDiv.className = 'signup-message error';
            messageDiv.style.display = 'block';
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 3000);
            return;
        }
    }
    
    // Show success message
    messageDiv.textContent = 'Thank you for subscribing! We\'ll keep you updated! 🎉';
    messageDiv.className = 'signup-message success';
    messageDiv.style.display = 'block';
    
    // Clear form
    document.getElementById('signupEmail').value = '';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    updateTopicDropdown();
    
    // Load thumbs count (async, will update when loaded)
    loadThumbsCount();
    
    // Set up real-time listener for thumbs count if Firebase is available
    if (firebaseInitialized && db) {
        db.collection('stats').doc('thumbsUp').onSnapshot((doc) => {
            if (doc.exists) {
                currentThumbsCount = doc.data().count || BASE_THUMBS_COUNT;
                updateThumbsCount();
            }
        });
    }
    
    // Check if user already gave thumbs up
    if (localStorage.getItem('thumbsUpGiven') === 'true') {
        document.getElementById('thumbsUp').classList.add('active');
    }
    
    document.getElementById('subject').addEventListener('change', updateTopicDropdown);
    document.getElementById('ageGroup').addEventListener('change', updateTopicDropdown);
    document.getElementById('generateBtn').addEventListener('click', generateWorksheet);
    document.getElementById('printBtn').addEventListener('click', printWorksheet);
    
    // Feedback features
    document.getElementById('thumbsUp').addEventListener('click', function() {
        handleThumbsUp();
        localStorage.setItem('thumbsUpGiven', 'true');
    });
    
    document.getElementById('feedbackForm').addEventListener('submit', handleFeedbackSubmit);
    document.getElementById('signupForm').addEventListener('submit', handleSignupSubmit);
});
