import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {Icon} from "@hilla/react-components/Icon";
import '@vaadin/icons';
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {IntegerField} from "@hilla/react-components/IntegerField";
import {PasswordQuality} from "Frontend/util/enums";
import {PasswordField} from "@hilla/react-components/PasswordField";
import {Tooltip} from "@hilla/react-components/Tooltip";
import {Checkbox} from "@hilla/react-components/Checkbox";
import {CheckboxGroup} from "@hilla/react-components/CheckboxGroup";
import {useState} from "react";


export default function PasswordView() {
    const [characterGroups, setCharacterGroups] = useState(["lowercase", "uppercase", "numbers"])
    const [passwordLength, setPasswordLength] = useState("10");

    return (
        <>
            <section>
                <VerticalLayout
                    className={"border items-stretch w-auto"}
                    theme="spacing padding margin"
                >
                    <HorizontalLayout theme="spacing">
                        <PasswordField placeholder="Password goes here..." className={"w-full"}/>
                        <Button theme="icon">
                            <Icon icon="lumo:clock" slot="prefix"/>
                            <Tooltip
                                slot="tooltip"
                                text="Generate password"
                            />
                            Generate
                        </Button>
                        <Button theme="icon">
                            <Icon icon="vaadin:clipboard-text" slot="prefix"/>
                            <Tooltip
                                slot="tooltip"
                                text="Copy password to clipboard"
                            />
                            Copy to Clipboard
                        </Button>
                    </HorizontalLayout>
                    <p className={"text-tertiary"}>
                        Password quality:
                        <br/>
                        Entropy:
                    </p>
                    <hr/>
                    <HorizontalLayout
                        theme="spacing"
                        className={"items-baseline"}
                    >
                        <IntegerField
                            label="Password length"
                            min={0}
                            value={passwordLength}
                            onValueChanged={(event) => {setPasswordLength(event.detail.value)}}
                            stepButtonsVisible
                            helperText="Choose an appropiate password length"
                            style={{width: '8em'}}
                        />
                        <Button>
                            <Tooltip
                                slot="tooltip"
                                text="Show advanced options"
                            />
                            Advanced
                        </Button>
                        {/*    Falta implementar las opciones avanzadas
                           recordar que estas opciones tienen un tooltip
                    */}
                    </HorizontalLayout>
                    <hr/>
                    <HorizontalLayout theme="spacing">
                        <CheckboxGroup
                            label="Character types"
                            value={characterGroups}
                            onValueChanged={(event) => setCharacterGroups(event.detail.value)}
                        >
                            <Checkbox label="a-z" value="lowercase">
                                <Tooltip
                                    slot="tooltip"
                                    text="Lowercase characters"
                                />
                            </Checkbox>
                            <Checkbox label="A-Z" value="uppercase">
                                <Tooltip
                                    slot="tooltip"
                                    text="Uppercase characters"
                                />
                            </Checkbox>
                            <Checkbox label="0-9" value="numbers">
                                <Tooltip
                                    slot="tooltip"
                                    text="Numbers"
                                />
                            </Checkbox>
                            <Checkbox label="/ * - &" value="special">
                                <Tooltip
                                    slot="tooltip"
                                    text="Special characters"
                                />
                            </Checkbox>
                            <Checkbox label="Extended ASCII" value="extended">
                                <Tooltip
                                    slot="tooltip"
                                    text="Extended ASCII characters"
                                />
                            </Checkbox>
                        </CheckboxGroup>
                    </HorizontalLayout>
                </VerticalLayout>
            </section>
        </>
    )
}