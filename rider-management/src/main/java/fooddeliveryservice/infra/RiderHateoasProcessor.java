package fooddeliveryservice.infra;

import fooddeliveryservice.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class RiderHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Rider>> {

    @Override
    public EntityModel<Rider> process(EntityModel<Rider> model) {
        model.add(
            Link
                .of(model.getRequiredLink("self").getHref() + "/pickupfood")
                .withRel("pickupfood")
        );
        model.add(
            Link
                .of(model.getRequiredLink("self").getHref() + "/completedelivery")
                .withRel("completedelivery")
        );

        return model;
    }
}
