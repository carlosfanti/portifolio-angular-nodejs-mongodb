const mongoose = require('mongoose');
// require('./user.server.model');

const Schema = mongoose.Schema;

const CurriculumSchema = new Schema({
    languages: {
        type: [String]
    },
    curriculum: [
        {
            created: {
                type: Date,
                default: Date.now
            },
            updated: {
                type: Date,
                default: Date.now
            },
            experiences: [
                {
                    title: {
                        type: String,
                        required: 'Title cannot be blank'
                    },
                    local: {
                        type: String,
                        required: 'Local cannot be blank'
                    },
                    dates: {
                        start: { type: Date },
                        end: { type: Date }
                    },
                    content: {
                        type: String
                    }
                }
            ],
            educations: [
                {
                    title: {
                        type: String,
                        required: 'Title cannot be blank'
                    },
                    local: {
                        type: String,
                        required: 'Local cannot be blank'
                    },
                    dates: {
                        start: { type: Date },
                        end: { type: Date }
                    },
                    content: {
                        type: String
                    }
                }
            ],
            languages: [
                {
                    title: {
                        type: String,
                        required: 'Title cannot be blank'
                    },
                    nivel: {
                        type: Number,
                        required: 'Nivel cannot be blank'
                    },
                }
            ],
            skills: {
                classes: {
                    type: [String]
                },
                skills: [
                    {
                        title: {
                            type: String,
                            required: 'Title cannot be blank'
                        },
                        nivel: {
                            type: Number,
                            required: 'Nivel cannot be blank'
                        },
                        class: {
                            type: [String]
                        }
                    }
                ],
            },
            courses: {
                keywords: {
                    type: [String]
                },
                courses: [
                    {
                        title: {
                            type: String,
                            required: 'Title cannot be blank'
                        },
                        local: {
                            type: String,
                            required: 'Local cannot be blank'
                        },
                        dates: {
                            start: { type: Date },
                            end: { type: Date },
                            total: { type: Number }
                        },
                        content: {
                            type: String
                        },
                        url: {
                            type: String
                        },
                        keywords: {
                            type: [String]
                        }
        
                    }
                ]
            },
        }
    ],
    user: {
        name: {
            type: String,
            required: 'User cannot be blank'
        }
    }
});

mongoose.model('Curriculum', CurriculumSchema);