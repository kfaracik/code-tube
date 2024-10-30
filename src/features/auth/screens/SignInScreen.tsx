import React from "react";
import { StyleSheet, View, Image, Linking } from "react-native";
import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";
import { Button, Link, ScreenContainer } from "@shared/components";
import appImage from "@shared/assets/images/app-icon/app-icon.webp";
import { links } from "@shared/constants";
import { authStore } from "shared/store";
import { useAuth } from "@shared/hooks";

export const SignInScreen = () => {
  const { t } = useTranslation();
  const { login } = useAuth();

  const onLogInAsGuestPress = async () => {
    login();
  };

  const onOpenLink = (link: string) => {
    Linking.openURL(link).catch((err) => alert("Couldn't load page"));
  };

  const onTermsAndConditionsPress = () => {
    onOpenLink(links.termsAndConditions);
  };

  const onPrivacyPolicyPress = () => {
    onOpenLink(links.privacyPolicy);
  };

  return (
    <ScreenContainer style={styles.container} scrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t("signIn.title")}</Text>
        <Text style={styles.subtitle}>{t("signIn.subtitle")}</Text>
      </View>
      <Image resizeMode="contain" source={appImage} style={styles.image} />
      <View style={styles.bottomContainer}>
        <Text style={styles.commonText}>{t("signIn.description")}</Text>
        <Button title={t("signIn.button")} onPress={onLogInAsGuestPress} />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.smallText}>
            {t("signIn.termsAndConditionsPrefix")}
            <Link onPress={onTermsAndConditionsPress}>
              {t("signIn.termsAndConditionsLink")}
            </Link>
            {t("signIn.termsAndConditionsConjunction")}
            <Link onPress={onPrivacyPolicyPress}>
              {t("signIn.privacyPolicyLink")}
            </Link>
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#8D99AE",
    justifyContent: "space-between",
  },
  titleContainer: {
    marginTop: 48,
    width: 292,
    alignSelf: "center",
  },
  title: {
    fontSize: 64,
    color: "white",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 32,
    color: "white",
    textAlign: "right",
  },
  image: {
    alignSelf: "center",
    width: 128,
    height: 128,
  },
  bottomContainer: {
    gap: 24,
    marginBottom: 23,
  },
  commonText: {
    fontSize: 22,
    letterSpacing: 1,
    marginBottom: 8,
    color: "white",
    textAlign: "left",
  },
  bottomTextContainer: {
    marginHorizontal: 32,
  },
  smallText: {
    fontSize: 13,
    color: "white",
    textAlign: "center",
  },
});
