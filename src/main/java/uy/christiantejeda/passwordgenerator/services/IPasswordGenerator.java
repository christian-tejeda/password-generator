package uy.christiantejeda.passwordgenerator.services;

import java.util.Vector;

public interface IPasswordGenerator {

    Vector<Character> PasswordGroup = new Vector<>();

    boolean isValid();
    int getMinLength();
    String generatePassword();

    private Vector<Character> passwordGroups() {
        return new Vector<>();
    }

}
