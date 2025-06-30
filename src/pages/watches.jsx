import Layout from "../components/layout";
import watches from "../data/watches";

const Watches = () => (
  <>
  <div className="text-center text-3xl mt-10 underline underline-offset-4 decoration-amber-300">Welcome to the Watches Page</div>
  <Layout products={watches}/>
</>
    
);
export default Watches;