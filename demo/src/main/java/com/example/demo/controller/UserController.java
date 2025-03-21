package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping("/create") // Corrected endpoint
    public Map<String, Integer> createUserWithId(@RequestBody User user) {
        User savedUser = userService.createUser(user);
        Map<String, Integer> response = new HashMap<>();
        response.put("userid", savedUser.getUserid()); // Ensure `User` model has `userid`
        return response;
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User userDetails) {
        return userService.updateUser(id, userDetails);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        return userService.deleteUser(id) ? "User deleted successfully" : "User not found";
    }
}
