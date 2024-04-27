package fooddeliveryservice.infra;

import fooddeliveryservice.domain.*;
import fooddeliveryservice.service.*;
import java.util.List;
import java.util.Optional;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping(value="/riders")
@Transactional
public class RiderController {

    @Resource(name = "riderService")
    private RiderService riderService;

    @GetMapping("/rider")
    public List<Rider> getAllRiders() throws Exception {
        // Get all riders via RiderService
        return riderService.getAllRiders();
    }

    @GetMapping("/rider/{id}")
    public Optional<Rider> getRiderById(@PathVariable String riderId)
        throws Exception {
        // Get a rider by ID via RiderService
        return riderService.getRiderById(riderId);
    }

    @PostMapping("/rider")
    public Rider createRider(@RequestBody Rider rider) throws Exception {
        // Create a new rider via RiderService
        return riderService.createRider(rider);
    }

    @PutMapping("/rider/{id}")
    public Rider updateRider(
        @PathVariable String riderId,
        @RequestBody Rider rider
    ) throws Exception {
        // Update an existing rider via RiderService
        return riderService.updateRider(rider);
    }

    @DeleteMapping("/rider/{id}")
    public void deleteRider(@PathVariable String riderId) throws Exception {
        // Delete a rider via RiderService
        riderService.deleteRider(riderId);
    }

    @RequestMapping(
        value = "rider/{id}/pickupfood",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Rider pickUpFood(
        @PathVariable(value = "id") String riderId,
        @RequestBody PickUpFoodCommand pickUpFoodCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        return riderService.pickUpFood(pickUpFoodCommand);
    }

    @RequestMapping(
        value = "rider/{id}/completedelivery",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Rider completeDelivery(
        @PathVariable(value = "id") String riderId,
        @RequestBody CompleteDeliveryCommand completeDeliveryCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        return riderService.completeDelivery(completeDeliveryCommand);
    }
}
