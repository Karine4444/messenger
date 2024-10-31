import { Container, Nav, Navbar, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

const NavBar =  () => {
    const { user, logoutUser } = useContext(AuthContext)
    return (
        <Navbar  className="mb-4" style={{height: "3.75rem",  backgroundColor: "rgb(192, 218, 240"}}>
            <Container>
                <h2>
                    <Link to="/" className="link-light text-decoration-none">
                        Messenger
                    </Link>
                </h2>
                {user && (<span className="text-warning">Logged in {user?.name}</span> )}
                <Nav>
                    <Stack direction="horizontal" gap={3}>
                        { user && (<>
                            <Link onClick={() => logoutUser()} to="/login" className="link-light text-decoration-none">Logout</Link>
                            </>)
                        }
                        {!user && (<>
                            <Link to="/login" className="link-light text-decoration-none">
                                Login
                            </Link>
                            <Link to="/register" className="link-light text-decoration-none">
                                Register
                            </Link>
                        </>)}
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
        )
};
export default NavBar;