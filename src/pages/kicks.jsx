import Layout from "../components/layout";
import shoes from "../data/shoes";

const kicks = () => (
  <>
  <div className="text-center text-3xl mt-10 underline underline-offset-4 decoration-amber-300">Welcome to the Watches Page</div>
  <Layout products={shoes}/>
</>
    
);
export default kicks;