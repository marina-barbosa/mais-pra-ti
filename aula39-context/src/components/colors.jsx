export function Colors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      < div className="bg-white border-gray-300 border rounded-lg shadow-lg p-4 max-w-md" >
        <div className="bg-gray-200 rounded-t-lg px-4 py-2">
          <h2 className="text-xl font-bold">Código para img1</h2>
        </div>
        <pre className="font-mono p-4">
          <span className="text-blue-400">function</span> exemplo() <br />
          console.log(<span className="text-orange-400">Hello, world!</span>);<br />
          <span className="text-lime-500">let result = <span className="text-sky-400">true;</span>
            <span className="text-red-500">true;</span>
            <span className="text-yellow-400">true;</span>
          </span>
        </pre>
      </div >
    </div >
  )
}