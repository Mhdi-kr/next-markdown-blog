export const Aside = (props: { className: string }) => {
    return (
        <>
            <aside className={props.className}>
                <div className="mb-4">
                    <p className="font-medium mb-1 text-gray-600">
                        5 Recent posts
                    </p>
                    <ul className="text-gray-500">
                        <li>
                            <small>Developer&apos;s Procrastination</small>
                        </li>
                        <li>
                            <small>Memory management in Arduino</small>
                        </li>
                        <li>
                            <small>Refactoring to Functional paradigm</small>
                        </li>
                        <li>
                            <small>Frontend Development Skilltree</small>
                        </li>
                        <li>
                            <small>Memory management in Arduino</small>
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="font-medium mb-2 text-gray-600">Tags</p>
                    <ul className="text-gray-500 flex flex-wrap">
                        {Object.values(Tags)
                            .map((tag) => tag)
                            .sort((a, b) => b.length - a.length)
                            .map((tag, index) => (
                                <li
                                    className="mr-1 mb-1 text-xs bg-gray-100 p-1 rounded cursor-pointer"
                                    key={index}
                                >
                                    {tag}
                                </li>
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
