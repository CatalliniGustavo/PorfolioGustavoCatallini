package com.catallinigustavo.pgc.Controller;

import com.catallinigustavo.pgc.Entity.Usuario;
import com.catallinigustavo.pgc.Interface.IUsuarioService;
import java.util.List;
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

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    @Autowired
    IUsuarioService iusuarioService;

    @GetMapping("usuario/traer")
    public List<Usuario> getUsuario() {
        return iusuarioService.getUsuario();
    }

    @PostMapping("/usuario/crear")
    public String createUsuario(@RequestBody Usuario usuario) {
        iusuarioService.saveUsuario(usuario);
        return "El usuario se creo correctamente";
    }

    @DeleteMapping("/usuario/borrar/{id}")
    public String deletUsario(@PathVariable Long id) {
        iusuarioService.deletUsuario(id);
        return "El usario fué eliminado correctamente";
    }

    @PutMapping("/usuario/editar/{id}")
    public Usuario editUsario(
            @PathVariable Long id,
            @RequestParam("nombre") String nuevoNombre,
            @RequestParam("apellido") String nuevoApellido,
            @RequestParam("img") String nuevoImg) {
        Usuario usuario = iusuarioService.findUsuario(id);
        usuario.setNombre(nuevoNombre);
        usuario.setApellido(nuevoApellido);
        usuario.setImg(nuevoImg);

        iusuarioService.saveUsuario(usuario);
        return usuario;
    }

    @GetMapping("/usuario/traer/perfil")
    public Usuario findUsuario() {
        return iusuarioService.findUsuario((long)1);
    }
}
