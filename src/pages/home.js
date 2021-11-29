import React from "react";
import { FooterContainer } from "../containers";
import { Feature, OptForm } from "../components";
import {
  FaqsContainer,
  HeaderContainer,
  JumbotronContainer
} from "../containers";

export function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited Films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
            <OptForm.Pane>
              <OptForm.Input placeholder="Email Address" />
              <OptForm.Button>Get Started</OptForm.Button>
            </OptForm.Pane>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
