package fooddeliveryservice.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class NotifyRiderCommand {

    private String orderId;
}
