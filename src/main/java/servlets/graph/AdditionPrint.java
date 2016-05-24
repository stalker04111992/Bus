package servlets.graph;

import service.GraphicDao;
import servlets.entity.SavingPrint;

import javax.ejb.EJB;
import javax.ejb.EJBException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.text.ParseException;

@WebServlet(value = "/management/graph/add")
public class AdditionPrint extends SavingPrint {

    @EJB
    GraphicDao graphicDao;

    protected String add(HttpServletRequest request)throws ParseException, NumberFormatException, SQLException, EJBException, NullPointerException{
        int driverId = new Integer(request.getParameter("number"));
        String date = request.getParameter("date");
        int shift = new Integer(request.getParameter("shift"));
        java.sql.Date sqlDate = parseDate(date);
        return (graphicDao.addShift(driverId, sqlDate, shift) > 0) ? "Смена добавлена" : "Смена не добавлена";
    }
}
