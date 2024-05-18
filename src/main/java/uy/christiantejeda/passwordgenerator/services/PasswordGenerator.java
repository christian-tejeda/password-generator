package uy.christiantejeda.passwordgenerator.services;

import java.util.Vector;

public class PasswordGenerator implements IPasswordGenerator {

    private enum CharClass {

    }

    public final int defaultLength = 10;
    public final String defaultCustomCharSet = "";
    public final String defaultExcludedChars = "";

    private Vector<Character> passwordGroups;
    private int numCharGroups;

    private int length;
    private int classes;

    public PasswordGenerator() {}

    @Override
    public boolean isValid() {
        return false;
    }

    @Override
    public int getMinLength() {
        return 0;
    }

    @Override
    public String generatePassword() {
        return "";
    }
}
