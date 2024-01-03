

import AddMovie from './Components/AddMovie';
import DeleteMovie from './Components/DeleteMovie';
import NotFound from './Components/NotFound';
import SearchMovie from './Components/SearchMovie';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  
  <Route path='/' exact element={<AddMovie/>}/>
  <Route path='*'  element={<NotFound/>}/>
  <Route path='/search'  element={<SearchMovie/>}/>
  <Route path='/delete'  element={<DeleteMovie/>}/>
  <Route path='/viewAll'  element={<ViewAll/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
