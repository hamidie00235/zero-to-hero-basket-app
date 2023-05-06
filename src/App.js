import {useState} from 'react';
import {Button, Container,Input,Group, List,SimpleGrid,ThemeIcon} from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import './App.css';
import Card from "./components/Card";
const storeItems = [{
  name:"Apple",
  src:"Apple-Tools",
  price:23,},
  
    {
      name:"Camera",
      src:"Camera",
      price:4,},
      { 
      name:"Apple",
      src:"Apple-Tools2",
      price:2},
      { 
      name:"Watch",
      src:"Watch",
      price:6,},
      { 
      name:"Kit",
      src:"Kits",
      price:8,}
    ,
      {
      name:"Tool",
      src:"Tools",
      price:5,}
      ,
      {
      name:"CE",
      src:"Ce",
      price:5,}]
function App() {
  let [basketItems,setbasketItems]=useState([])
  let [searchValue,setSearchValue] = useState("")
  let filteredItems =storeItems.filter((item) =>item.name.indexOf(searchValue) >= 0);

  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama">
  <Input  value={searchValue}  onChange={(e) => setSearchValue(e.target.value)} />
</Input.Wrapper>
<Button onClick={() => setSearchValue("")} >temizle</Button>
</Group>
   <SimpleGrid cols={3} className="store">

  
      {filteredItems.map(({name,src}) => {
        return <Card 
        key={name}
         name={name} 
         src={src}
         onAdd ={() => setbasketItems([...basketItems,{name}])} />

        })  }
      </SimpleGrid>
  
      <List className="List"
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >
        {basketItems.map(({name}, index) => ( 
           <List.Item key={index}>{name}</List.Item>
           ))}
    
    </List>
      </Container>
      
  );
}

export default App;
