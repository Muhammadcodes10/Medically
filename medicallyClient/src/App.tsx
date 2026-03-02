import Search from "./components/search";
import TopBar from "./components/topbar";
import About from "./components/about";
import ClientTestimonials from "./components/clientTestimonials";
import FAQs from "./components/faqs";
import Contact from "./components/contacts";
import Check from "./components/location";

function App() {
  return (
    <>
      <TopBar />
      <Search />
      <About />
      <ClientTestimonials />
      <FAQs />
    <Check/>
    

      <Contact />
    </>
  );
}
export default App;
