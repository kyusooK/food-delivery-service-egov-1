package fooddeliveryservice.domain;

import fooddeliveryservice.domain.*;
import fooddeliveryservice.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class NotificationSentToRider extends AbstractEvent {

    private String orderId;

    public NotificationSentToRider(Order aggregate) {
        super(aggregate);
    }

    public NotificationSentToRider() {
        super();
    }
}
//>>> DDD / Domain Event
