package entities;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Entity(name="driver")
@Table(name="driver")
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;
    //персональные данные
    @Column(name = "lastName", length = 50, nullable = false)
    private String lastName;
    @Column(name = "firstName", length = 50, nullable = false)
    private String firstName;
    @Column(name = "patronymic", length = 50, nullable = false)
    private String patronymic;
    @Column(name = "birthDate", nullable = false)
    private Date birthDate;
    @Column(name = "address", length = 256, nullable = false)
    private String address;
    @Column(name = "telephone", length = 15, nullable = false)
    private String telephone;
    @Column(name = "licenseNumber", unique = true, length = 10, nullable = false)
    private String licenseNumber;

    public Driver(){}

    public static Driver getDriver(HttpServletRequest request) throws ParseException, NumberFormatException, NullPointerException{
        String number = request.getParameter("number");
        String lastName = request.getParameter("lastName");
        String firstName = request.getParameter("firstName");
        String patronymic = request.getParameter("patronymic");
        String birthDate = request.getParameter("birthDate");
        String address = request.getParameter("address");
        String telephone = request.getParameter("telephone");
        String licenseNumber = request.getParameter("licenseNumber");

        if (personnelMatches(lastName, firstName, patronymic, birthDate, address, telephone, licenseNumber)) {
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date parsed = format.parse(birthDate);
            Date date = new Date(parsed.getTime());

            Driver driver = new Driver(lastName, firstName, patronymic, date, address, telephone, licenseNumber);
            if(number != null){
               driver.setId(new Integer(number));
            }
            return driver;
        }
        return null;
    }

    public Driver(String lastName, String firstName, String patronymic, Date birthDate, String address, String telephone, String licenseNumber){
        this.setLastName(lastName);
        this.setFirstName(firstName);
        this.setPatronymic(patronymic);
        this.setBirthDate(birthDate);
        this.setAddress(address);
        this.setTelephone(telephone);
        this.setLicenseNumber(licenseNumber);
    }

    @Override
    public int hashCode(){
        return this.id;
    }

    @Override
    public boolean equals(Object object) {
        if (object instanceof Driver) {
            Driver driver = (Driver) object;
            return driver.getId() == this.id & driver.getLastName().equals(this.getLastName())
                    & driver.getFirstName().equals(this.getFirstName()) & driver.getPatronymic().equals(this.getPatronymic()) &
                    driver.getBirthDate().equals(this.getBirthDate()) & driver.getLicenseNumber().equals(this.getLicenseNumber());
        }
        return false;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public static boolean nameMatches(String lastName){
        Pattern patternLastName = Pattern.compile("^[A-Za-zА-Яа-яЁё -]{1,50}$");
        Matcher matcherLastName = patternLastName.matcher(lastName);
        return matcherLastName.matches();
    }

    public static boolean patronymicMatches(String lastName){
        Pattern patternPatronymic = Pattern.compile("^[A-Za-zА-Яа-яЁё -]{0,50}$");
        Matcher matcherPatronymic = patternPatronymic.matcher(lastName);
        return matcherPatronymic.matches();
    }

    public static boolean licenseMatches(String lastName){
        Pattern patternLicense = Pattern.compile("^[0-9]{1}[A-Z]{2} [0-9]{6}$");
        Matcher matcherLicense = patternLicense.matcher(lastName);
        return matcherLicense.matches();
    }

    public static boolean birthDateMatches(String birthDate){
        Pattern patternBirthDate= Pattern.compile("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
        Matcher matcherBirthDate = patternBirthDate.matcher(birthDate);
        return matcherBirthDate.matches();
    }

    public static boolean addressMatches(String address){
        Pattern patternAddress = Pattern.compile("^[A-Za-zА-Яа-яЁё0-9-(),. ]{0,256}$");
        Matcher matcherAddress = patternAddress.matcher(address);
        return matcherAddress.matches();
    }

    public static boolean telephoneMatches(String telephone){
        Pattern patternTelephone = Pattern.compile("^[0-9]{0,15}$");
        Matcher matcherTelephone = patternTelephone.matcher(telephone);
        return matcherTelephone.matches();
    }

    public static boolean personnelMatches(String lastName, String firstName, String patronymic, String birthDate, String address, String telephone, String licenseNumber){
        return  (nameMatches(lastName) & nameMatches(firstName) & patronymicMatches(patronymic) & birthDateMatches(birthDate) & addressMatches(address) & telephoneMatches(telephone) & licenseMatches(licenseNumber));
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
}
