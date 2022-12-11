import Dropdown from 'react-bootstrap/Dropdown';

function ButtonDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        <Dropdown.Item href="/public/categoria/mercado">Mercado</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/floricultura">Floricultura</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/alimentacao">Alimentação</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/financeiro">Financeiro</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Agricola (3)</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Automotivo (5)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonDown;