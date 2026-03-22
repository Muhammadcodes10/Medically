import Search from "./components/search";
import TopBar from "./components/topbar";
import About from "./components/about";
import ClientTestimonials from "./components/clientTestimonials";
import FAQs from "./components/faqs";
import Contact from "./components/contacts";
function App() {
  return (
    <>
      <TopBar />
      <Search />
      <About />
      <ClientTestimonials />
      <FAQs />

      <Contact />
    </>
  );
}
export default App;
