import Header from './components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" grid">
      <Header />
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        {children}
      </div>
    </div>
  );
}
