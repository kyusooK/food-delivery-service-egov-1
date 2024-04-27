package fooddeliveryservice.service;

import fooddeliveryservice.domain.*;
import java.util.List;
import java.util.Optional;

public interface RiderService {
    List<Rider> getAllRiders() throws Exception;
    Optional<Rider> getRiderById(String riderId) throws Exception;
    Rider createRider(Rider rider) throws Exception;
    Rider updateRider(Rider rider) throws Exception;
    void deleteRider(String riderId) throws Exception;

    Rider pickUpFood(PickUpFoodCommand pickUpFoodCommand) throws Exception;
    Rider completeDelivery(CompleteDeliveryCommand completeDeliveryCommand)
        throws Exception;
}
