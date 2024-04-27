package fooddeliveryservice.service.impl;

import fooddeliveryservice.domain.CompleteDeliveryCommand;
import fooddeliveryservice.domain.PickUpFoodCommand;
import fooddeliveryservice.domain.Rider;
import fooddeliveryservice.domain.RiderRepository;
import fooddeliveryservice.service.RiderService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.egovframe.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("riderService")
@Transactional
public class RiderServiceImpl
    extends EgovAbstractServiceImpl
    implements RiderService {

    private static final Logger LOGGER = LoggerFactory.getLogger(
        RiderServiceImpl.class
    );

    @Autowired
    RiderRepository riderRepository;

    @Override
    public List<Rider> getAllRiders() throws Exception {
        // Get all riders
        return StreamSupport
            .stream(riderRepository.findAll().spliterator(), false)
            .collect(Collectors.toList());
    }

    @Override
    public Optional<Rider> getRiderById(String riderId) throws Exception {
        // Get a rider by ID
        return riderRepository.findById(riderId);
    }

    @Override
    public Rider createRider(Rider rider) throws Exception {
        // Create a new rider
        return riderRepository.save(rider);
    }

    @Override
    public Rider updateRider(Rider rider) throws Exception {
        // Update an existing rider via RiderService
        if (riderRepository.existsById(rider.getRiderId())) {
            return riderRepository.save(rider);
        } else {
            throw processException("info.nodata.msg");
        }
    }

    @Override
    public void deleteRider(String riderId) throws Exception {
        // Delete a rider
        riderRepository.deleteById(riderId);
    }

    @Override
    public Rider pickUpFood(PickUpFoodCommand pickUpFoodCommand)
        throws Exception {
            return null;

        // You can implement logic here, or call the domain method of the Rider.

        /** Choice 1:  implement logic here        
        Optional<Rider> optionalRider = riderRepository.findById(pickUpFoodCommand.getRiderId());

        if (optionalRider.isPresent()) {
            Rider rider = optionalRider.get();
            
            // business Logic....
            riderRepository.save(rider);

            return rider;
        } else {
            throw processException("info.nodata.msg");
        }
       

        /** Choice 2:  call the domain method of the Rider.   
        return Rider.pickUpFood(pickUpFoodCommand);
           */
        return null;
    }

    @Override
    public Rider completeDelivery(
        CompleteDeliveryCommand completeDeliveryCommand
    ) throws Exception {
        return null;

        // You can implement logic here, or call the domain method of the Rider.

        /** Choice 1:  implement logic here        
        Optional<Rider> optionalRider = riderRepository.findById(completeDeliveryCommand.getRiderId());

        if (optionalRider.isPresent()) {
            Rider rider = optionalRider.get();
            
            // business Logic....
            riderRepository.save(rider);

            return rider;
        } else {
            throw processException("info.nodata.msg");
        }
       

        /** Choice 2:  call the domain method of the Rider.   
        return Rider.completeDelivery(completeDeliveryCommand);
           */
        return null;
    }
}
