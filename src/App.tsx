import { BrowserRouter, Routes, Route, Link } from "react-router";

// components
import { Users } from "./pages/Users";

function App() {
  const paths = [
    { path: "/", label: "👤 USERS" },
    { path: "/posts", label: "📝 POSTS" },
    { path: "/comments", label: "💬 COMMENTS" },
    { path: "/albums", label: "🖼️ ALBUMS" },
    { path: "/todos", label: "✅ TODOS" },
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-700">
        <header className="p-4 bg-lime-400 border-b-8 border-dotted border-red-600">
          <h1 className="text-6xl font-bold text-center text-fuchsia-800 animate-pulse font-comic">
            🤮 UGLY NtData App 🤮
          </h1>
          <h1 className="my-2 text-2xl text-blue-800 bg-yellow-200 p-2 border-4 border-dashed border-orange-500">
            The WORST app you've ever seen! Scrolling text is back baby!!!
          </h1>
          <nav className="mt-4 flex flex-wrap justify-center gap-2">
            {paths.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="inline-block p-3 m-1 text-xl font-bold text-white bg-gradient-to-r from-green-600 to-blue-800 hover:from-blue-800 hover:to-green-600 transform hover:rotate-3 transition-transform shadow-lg border-4 border-double border-yellow-400 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="p-4 bg-orange-200 min-h-[80vh] border-l-8 border-r-8 border-purple-500">
          <Routes>
            <Route path="/" element={<Users />} />
          </Routes>
        </main>
        <footer className="p-4 bg-cyan-300 text-center border-t-8 border-dotted border-red-600 block!">
          <p className="text-xl font-bold text-purple-800">
            👎 Made with terrible taste 👎
          </p>
          <div className="mt-2 text-sm text-red-700 animate-bounce">
            Copyright &copy; {new Date().getFullYear()} B1lol-dev
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
