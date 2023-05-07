import {useState} from 'react';
import {Button,Drawer, Container,Input,Indicator,Group, List,SimpleGrid,ThemeIcon} from '@mantine/core';
import { IconCircleCheck, IconBasket,IconCircleDashed } from '@tabler/icons-react';
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
  let [opened ,setOpened] = useState(false);
  let [basketItems,setBasketItems]=useState([])
  let [searchValue,setSearchValue] = useState("")
  let filteredItems =storeItems.filter((item) =>item.name.indexOf(searchValue) >= 0);

  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama">
  <Input  value={searchValue}  onChange={(e) => setSearchValue(e.target.value)} />
</Input.Wrapper>
<Button onClick={() => setSearchValue("")} >temizle</Button>
<Indicator color="red" label={basketItems.length} size={22}>
<Button onClick={() => setOpened(true)} >
  <IconBasket size={22}/>
</Button>
</Indicator>
</Group>
   <SimpleGrid cols={3} className="store">

  
      {filteredItems.map(({name,src}) => {
        return <Card 
        key={name}
         name={name} 
         src={src}
         onAdd ={() => setBasketItems([...basketItems,{name}])} />

        })  }
      </SimpleGrid>
      <Drawer opened={opened} onClose={() => setOpened(false) }
      title="Sepetim">
        
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
      </Drawer>
  
      
      </Container>
      
  );
}

export default App;
