package servlets.drivers;

import entities.Bus;
import entities.Driver;
import service.BusDao;
import service.DriverDao;
import servlets.entity.SearchingController;

import javax.ejb.EJB;
import javax.naming.NamingException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;

@WebServlet(value = "/management/drivers/control")
public class LicenseNumberController extends SearchingController{

    @EJB
    DriverDao driverDao;

    protected int search(HttpServletRequest request)throws ParseException, IOException, SQLException, NumberFormatException, NamingException, NullPointerException{
        String licenseNumber = request.getParameter("licenseNumber");
        if (Driver.licenseMatches(licenseNumber)){
            int number = new Integer(request.getParameter("number"));
            return driverDao.getCountsDrivers(number, licenseNumber);
        }
        else{
            throw new NumberFormatException();
        }
    }
}
