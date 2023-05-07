import {useState} from 'react';
import {Badge,Button,Drawer, Container,Input,Indicator,Group, List,SimpleGrid,ThemeIcon} from '@mantine/core';
import { IconCircleCheck, IconBasket,IconCircleDashed } from '@tabler/icons-react';
import './App.css';
import Card from "./components/Card";
const storeItems = [
  {
  id: 100,
  name:"Apple",
  src:"Apple-Tools",
  price:23,},
  
    {id: 101,
      name:"Camera",
      src:"Camera",
      price:4,},
      { 
        id: 102,
      name:"Apple",
      src:"Apple-Tools2",
      price:2},
      { 
        id: 103,
      name:"Watch",
      src:"Watch",
      price:6,},
      { 
        id: 104,
      name:"Kit",
      src:"Kits",
      price:8,}
    ,
      {
        id: 105,
      name:"Tool",
      src:"Tools",
      price:5,}
      ,
      {
        id: 106,
      name:"CE",
      src:"Ce",
      price:5,}]
function App() {
  let [opened ,setOpened] = useState(false);
  let [basketItems,setBasketItems]=useState([]);
  let [searchValue,setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );

let addToBasket =({ id, name}) => {
  let basketIndex = basketItems.findIndex((item) => item.id === id);
  if (basketIndex >= 0) {

    let _basketItems =[...basketItems];
    _basketItems[basketIndex].count += 1;
    setBasketItems(_basketItems);
  }
    else{
  setBasketItems([...basketItems, { id, name, count: 1 }]);
}
};
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama">
  <Input  value={searchValue}  onChange={(e) => setSearchValue(e.target.value)} />
</Input.Wrapper>
<Button onClick={() => setSearchValue("")} >Temizle</Button>
<Indicator color="red" label={basketItems.length} size={22}>
<Button onClick={() => setOpened(true)} >
  <IconBasket size={22}/>
</Button>
</Indicator>
</Group>
   <SimpleGrid cols={3} className="store">

  
      {filteredItems.map(({id,name,src}) => {
        return (<Card 
        key={name}
         name={name} 
         src={src}
         onAdd ={() =>
          addToBasket({id,name})} />
        );
      
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
        {basketItems.map(({name,count}, index) => ( 
           <List.Item key={index}>
            <Group>
       <div> {name}</div> <Badge>{count}</Badge>
       </Group>
           </List.Item>
           ))}
    
    </List>
      </Drawer>
      </Container>
      
  );
}

export default App;
