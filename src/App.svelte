<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import "./style.scss";
  
  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
  </nav>
  <div>
    <Route path="/" component={Home} />
  </div>
</Router>
