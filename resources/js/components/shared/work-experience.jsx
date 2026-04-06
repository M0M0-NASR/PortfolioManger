import { motion } from 'framer-motion';

function WorkExperience() {
    const experiences = [
        {
            id: 1,
            company: 'Ministry of Egyptian Defence',
            position: 'Software Engineer',
            duration: '10/2024 - Present',
            location: 'Egypt',
            description:
                'Developing and maintaining software solutions for defense systems. Working on critical applications with high security and performance requirements.',
            achievements: [
                'Contributing to national defense software infrastructure',
                'Implementing secure coding practices and protocols',
                'Collaborating with cross-functional teams on complex systems',
            ],
            tech: ['Oracle DB', 'Oracle APEX', 'IReport', 'Laravel', 'PHP'],
        },
        {
            id: 2,
            company: 'Freelancer',
            position: 'Full-Stack Developer',
            duration: '06/2022 - 05/2024',
            location: 'Remote',
            description:
                'Worked as a freelance developer specializing in real estate applications with AI integration. Delivered graduation projects for students with modern web technologies.',
            achievements: [
                'Completed 2 graduation projects in real estate with AI features',
                'Integrated AI algorithms for property valuation and recommendations',
                'Built responsive web applications with modern UI/UX design',
                'Managed full project lifecycle from concept to deployment and testing',
            ],
            tech: ['PHP', 'Laravel', 'Python', 'Flask', 'AI/ML'],
        },
        {
            id: 3,
            company: 'ONLINE Student Activity',
            position: 'Volunteer PHP Mentor',
            duration: '10/2022 - 05/2023',
            location: 'Remote',
            description: 'Worked as a Volunteer PHP Mentor for students.',
            achievements: [
                'Guided and taught +20 students in PHP programming and best practices',
                'Assisted in the development of student projects',
                'Conducted code reviews and provided constructive feedback',
                'Organized workshops on PHP and web development',
            ],
            tech: ['PHP', 'MVC', 'MySQL', 'JavaScript', 'HTML/CSS'],
        },
    ];

    return (
        <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="mb-8 text-xl font-semibold text-zinc-200">
                    Work Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline line */}
                            {index < experiences.length - 1 && (
                                <div className="absolute top-16 left-6 h-full w-0.5 bg-zinc-800"></div>
                            )}

                            <div className="flex items-start space-x-6">
                                {/* Timeline dot */}
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600">
                                    <div className="h-3 w-3 rounded-full bg-white"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-700">
                                    <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {exp.position}
                                            </h3>
                                            <p className="font-medium text-emerald-400">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="mt-1 text-sm text-zinc-400 sm:mt-0">
                                            <p>{exp.duration}</p>
                                            <p>{exp.location}</p>
                                        </div>
                                    </div>

                                    <p className="mb-4 text-zinc-300">
                                        {exp.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="mb-2 text-sm font-medium text-zinc-200">
                                            Key Achievements:
                                        </h4>
                                        <ul className="space-y-1">
                                            {exp.achievements.map(
                                                (achievement, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start text-sm text-zinc-400"
                                                    >
                                                        <span className="mr-2 text-emerald-400">
                                                            •
                                                        </span>
                                                        {achievement}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default WorkExperience;
