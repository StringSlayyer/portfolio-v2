export default function BasicLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2022</p>
      </footer>
    </div>
  );
}
