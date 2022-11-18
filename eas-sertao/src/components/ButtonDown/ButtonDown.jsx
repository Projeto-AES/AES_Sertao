import Dropdown from 'react-bootstrap/Dropdown';

function ButtonDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mercado (4)</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Vestimenta (3)</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Alimentação (6)</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Financeiro (2)</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Agricola (3)</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Automotivo (5)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonDown;