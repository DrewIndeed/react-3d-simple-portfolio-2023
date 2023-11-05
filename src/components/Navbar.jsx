import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 1400px;
  /* background-color: cyan; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1rem;
`;

const Icons = styled.div`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 5px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: #da4ea2;
  outline: none;
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <Content>
        <Links>
          <Logo src="/img/moon.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="/img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Content>
    </NavWrapper>
  );
};

export default Navbar;
