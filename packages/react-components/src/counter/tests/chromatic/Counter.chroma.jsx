import { Counter } from "@react-components/counter";
import { Inline, Stack } from "@react-components/layout";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Counter"))
        .segment(segment)
        .parameters(paramsBuilder()
            .canvasLayout({ width: "80%" })
            .chromaticDelay(100)
            .build())
        .build();
}

stories()
    .add("default", () =>
        <Stack>
            <Inline align="end">
                <Counter size="small">15</Counter>
                <Counter>15</Counter>
                <Counter size="large">15</Counter>
            </Inline>
            <Inline>
                <Counter>2</Counter>
                <Counter>9999+</Counter>
            </Inline>
        </Stack>
    )
    .add("divider", () =>
        <Stack>
            <Counter variant="divider" pad>15</Counter>
            <Counter variant="divider" pad>15</Counter>
            <div>Planets Visited <Counter variant="divider" className="ml2">15</Counter></div>
        </Stack>
    )
    .add("reverse", () =>
        <div><Counter reverse variant="divider" pad>15</Counter> Planets Visited </div>
    )
    .add("light", () =>
        <Inline align="center">
            <Counter color="light">15</Counter>
            <Counter variant="divider" color="light">15</Counter>
        </Inline>
    )
    .add("highlight", () =>
        <Inline align="center">
            <Counter highlight>15</Counter>
            <Counter variant="divider" highlight>15</Counter>
        </Inline>
    )
    .add("disabled", () =>
        <Counter disabled>15</Counter>
    )
    .add("styling", () =>
        <Stack>
            <Inline>
                <Counter className="bg-red">15</Counter>
                <Counter style={{ backgroundColor: "red" }}>15</Counter>
            </Inline>
            <Inline>
                <Counter className="bg-red" variant="divider">15</Counter>
                <Counter style={{ backgroundColor: "red" }} variant="divider">15</Counter>
            </Inline>
        </Stack>
    );
