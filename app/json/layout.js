export const metadata = {
  title: "Json - CodeFormater.xyz",
  description: "Simple dev tools for every day formatting",
};

export default function JsonLayout({ children }) {
  return (
    <section>
      <div className="w-full flex justify-center content-center">
        <div className="w-3/5">
          <h1 className="text-2xl font-bold text-center">Json Formatter</h1>
          {children}
        </div>
      </div>
    </section>
  );
}
