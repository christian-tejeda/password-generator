import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {Icon} from "@hilla/react-components/Icon";
import '@vaadin/icons';
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {IntegerField} from "@hilla/react-components/IntegerField";
import {PasswordQuality} from "Frontend/util/enums";
import {useState} from "react";

export default function PasswordView() {

    let passwordQuality: PasswordQuality;
    let entropy: number;

    return (
        <>
            <section>
                <VerticalLayout theme="spacing padding margin">
                    <HorizontalLayout theme="spacing">
                        <TextField placeholder="Password goes here..."/>
                        <Button theme="icon">
                            <Icon icon="lumo:reload" slot="prefix"/>
                            Regenerate
                        </Button>
                        <Button theme="icon">
                            <Icon icon="vaadin:clipboard-text" slot="prefix"/>
                            Copy to clipboard
                        </Button>
                    </HorizontalLayout>
                    <p>Password quality: </p>
                    <p>Entropy: </p>
                    <HorizontalLayout
                        theme="spacing"
                        style={{alignItems: 'baseline'}}
                    >
                        <IntegerField
                            label="Password length"
                            min={0}
                            value="10"
                            stepButtonsVisible
                            helperText="Choose an appropiate password length"
                        />
                        <Button>Advanced Mode</Button>
                        {/*    Falta implementar las opciones avanzadas
                           recordar que estas opciones tienen un tooltip
                    */}
                    </HorizontalLayout>
                    <span className="text-xl font-bold">
                        Character types
                    </span>
                    <HorizontalLayout
                        theme="spacing"
                        style={{alignItems: 'baseline'}}
                    >
                        <Button>a-z</Button>
                        <Button>A-Z</Button>
                        <Button>0-9</Button>
                        <Button>/ * - &</Button>
                        <Button>Extended ASCII</Button>
                    </HorizontalLayout>
                </VerticalLayout>

            </section>
        </>
    )
}