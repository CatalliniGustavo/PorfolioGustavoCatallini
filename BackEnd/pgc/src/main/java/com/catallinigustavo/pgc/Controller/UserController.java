package com.catallinigustavo.pgc.Controller;

import com.catallinigustavo.pgc.Entity.Experiencia;
import com.catallinigustavo.pgc.Entity.User;
import com.catallinigustavo.pgc.Interface.IExperienciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.catallinigustavo.pgc.Interface.IUserService;
import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

    @Autowired
    IUserService iusuarioService;
    @Autowired
    IExperienciaService iExperienciaService;
    
    @GetMapping("user/traer")
    public List<User> getUser(){
        return iusuarioService.getUser();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/usuario/crear")
    public String createUsuario(@RequestBody User usuario) {
        iusuarioService.saveUser(usuario);
        return "El usuario fué creado correctamente";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/usuario/experiencia/crear")
    public String crearExperiencia(@RequestBody Experiencia experiencia){
        iExperienciaService.saveExperiencia(experiencia);
        return "La experiencia fue guardada";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/usuario/borrar/{id}")
    public String deletUsario(@PathVariable Long id) {
        iusuarioService.deletUser(id);
        return "El usario fué eliminado correctamente";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/usuario/experiencia/borrar/{id}")
    public String deletExperincia(@PathVariable Long id) {
        iExperienciaService.deletExperiencia(id);
        return "La Experiencia fué eliminada correctamente";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/usuario/editar/{id}")
    public User editUsario(
            @PathVariable Long id,
            @RequestParam("nombre") String nuevoNombre,
            @RequestParam("email") String nuevoEmail,
            @RequestParam("img") String nuevoImg,
            @RequestParam("acerca") String nuevoAcerca) {
        User usuario = iusuarioService.findUser(id);
        usuario.setNombre(nuevoNombre);
        usuario.setEmail(nuevoEmail);
        usuario.setImg(nuevoImg);
        usuario.setAcerca(nuevoAcerca);
        iusuarioService.saveUser(usuario);
        return usuario;
    }

    @GetMapping("user/traer/perfil")
    public User findUser() {
        return iusuarioService.findUser((long) 1);
    }
}
