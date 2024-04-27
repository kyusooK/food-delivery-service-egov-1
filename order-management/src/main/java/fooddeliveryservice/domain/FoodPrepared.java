package fooddeliveryservice.domain;

import fooddeliveryservice.domain.*;
import fooddeliveryservice.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class FoodPrepared extends AbstractEvent {

    private String orderId;

    public FoodPrepared(Order aggregate) {
        super(aggregate);
    }

    public FoodPrepared() {
        super();
    }
}
//>>> DDD / Domain Event
