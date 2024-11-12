export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <p>&copy; Next JS</p>
        </div>
    )
}
