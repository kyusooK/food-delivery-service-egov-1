package fooddeliveryservice.domain;

import fooddeliveryservice.RiderManagementApplication;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Rider_table")
@Data
//<<< DDD / Aggregate Root
public class Rider {

    @Id
    private String riderId;

    private String orderId;

    @PrePersist
    public void onPrePersist() {}

    public static RiderRepository repository() {
        RiderRepository riderRepository = RiderManagementApplication.applicationContext.getBean(
            RiderRepository.class
        );
        return riderRepository;
    }

    //<<< Clean Arch / Port Method
    public void pickUpFood(PickUpFoodCommand pickUpFoodCommand) {
        //implement business logic here:

        FoodPickedUp foodPickedUp = new FoodPickedUp(this);
        foodPickedUp.publishAfterCommit();
    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public void completeDelivery(
        CompleteDeliveryCommand completeDeliveryCommand
    ) {
        //implement business logic here:

        DeliveryCompleted deliveryCompleted = new DeliveryCompleted(this);
        deliveryCompleted.publishAfterCommit();
    }
    //>>> Clean Arch / Port Method

}
//>>> DDD / Aggregate Root
