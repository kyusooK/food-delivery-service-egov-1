package fooddeliveryservice.domain;

import fooddeliveryservice.domain.*;
import fooddeliveryservice.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class FoodPickedUp extends AbstractEvent {

    private String riderId;
    private String orderId;

    public FoodPickedUp(Rider aggregate) {
        super(aggregate);
    }

    public FoodPickedUp() {
        super();
    }
}
//>>> DDD / Domain Event
