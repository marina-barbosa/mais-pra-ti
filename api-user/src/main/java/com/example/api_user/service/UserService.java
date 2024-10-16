package com.example.api_user.service;

import com.example.api_user.repository.UserRepository;
import org.springframework.stereotype.Service;
import com.example.api_user.dto.UserDTO;
import com.example.api_user.model.User;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  public List<UserDTO> getAllUsers() {
    return userRepository
        .findAll()
        .stream()
        .map(this::convertToDTO)
        .collect(Collectors.toList());
  }

  public UserDTO getUserById(int id) {
    Optional<User> user = userRepository.findById(id);
    return user.map(this::convertToDTO).orElse(null);
  }

  public UserDTO createUser(UserDTO userDTO) {
    User user = new User();
    user.setUsername(userDTO.getUsername());
    user.setEmail(userDTO.getEmail());
    user.setRole(userDTO.getRole());

    String encodedPassword = passwordEncoder.encode(userDTO.getPassword());
    user.setPassword(encodedPassword);

    userRepository.save(user);

    return convertToDTO(user);
  }

  public UserDTO updateUser(int id, UserDTO userDTO) {
    Optional<User> userOptional = userRepository.findById(id);
    if (userOptional.isPresent()) {
      User user = userOptional.get();
      user.setUsername(userDTO.getUsername());
      user.setEmail(userDTO.getEmail());
      user.setRole(userDTO.getRole());
      userRepository.save(user);
      return convertToDTO(user);
    }
    return null;
  }

  public void deleteUser(int id) {
    userRepository.deleteById(id);
  }

  private UserDTO convertToDTO(User user) {
    UserDTO userDTO = new UserDTO();
    userDTO.setId(user.getId());
    userDTO.setUsername(user.getUsername());
    userDTO.setEmail(user.getEmail());
    userDTO.setRole(user.getRole());

    return userDTO;
  }

}
