export const Aside = (props: { className: string }) => {
    return (
        <>
            <aside className={props.className}>
                <div className="mb-4">
                    <h2 className="font-medium mb-2 text-gray-600">
                        5 Recent posts
                    </h2>
                    <ul className="text-gray-500">
                        <li>Developer&apos;s Procrastination</li>
                        <li>Memory management in Arduino</li>
                        <li>Refactoring to Functional paradigm</li>
                        <li>Frontend Development Skilltree</li>
                        <li>Memory management in Arduino</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="font-medium mb-2 text-gray-600">Tags</h2>
                    <ul className="text-gray-500 flex flex-wrap">
                        {Object.values(Tags)
                            .map((tag) => tag)
                            .sort((a, b) => b.length - a.length)
                            .map((tag, index) => (
                                <li className="mr-1 mb-1 text-xs bg-gray-200 p-1 rounded cursor-pointer" key={index}>{tag}</li>
                            ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};
enum Tags {
    TUTORIAL = "tutorial",
    EMBEDED = "embeded",
    FRONTEND = "frontend",
    BACKEND = "backend",
    DEVOPS = "devops",
    TEST = "test",
    LIFE = "life",
}
