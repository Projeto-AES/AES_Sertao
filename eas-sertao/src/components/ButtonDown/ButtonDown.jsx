import Dropdown from 'react-bootstrap/Dropdown';
 function ButtonDown() {

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item href="/public/empresa"><b>Mostrar todas</b></Dropdown.Item>
        <Dropdown.Item href="/public/categoria/agropecuária">Agropecuaria</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/agricola">Agrícola</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/automotivo">Automotivo</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/autoeletrica">Auto Eletrica</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/mecanica">Açougue</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/bar">Bar</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/barbearia">Barbearia</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/departamento">Departamento</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/farmacia">Farmácia</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/financeiro">Financeiro</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/floricultura">Floricultura</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/hospital">Hospital</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/joalheria">Joalheria</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/mecanica">Mecânica</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/mercado">Mercado</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/mercearia">Mercearia</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/vestimenta">Vestimenta</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/restaurante">Restaurante</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/postodegasolina">Posto de gasolina</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/petshop">Pet Shop</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/religiao">Religião</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/taxi">Taxi</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/teleentrega">Tele Entrega</Dropdown.Item>
        <Dropdown.Item href="/public/categoria/telecom">Telecomunicaçao</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonDown;

