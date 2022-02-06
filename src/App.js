import "./style.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Veggie from "./pages/Veggie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:categoryId" element={<Category />} />
          <Route path="veggies/:veggieId" element={<Veggie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
