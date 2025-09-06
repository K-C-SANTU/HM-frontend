import { getColors } from "@HM/materialTheme/colors";

import { CustomThemeConfig, ThemeMode } from "./interface.material.theme";

export const designTokens = {
    borderRadius: {
        sm: 6,
        md: 8,
        lg: 12,
        xl: 16,
    },
    padding: {
        sm: "2px 4px",
        md: "6px 12px",
        lg: "16px",
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
    minHeight: {
        toolbar: "64px",
    },
    boxShadow: {
        card: "0px 4px 20px rgba(0,0,0,0.12)",
    },
    fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
};

export default function getThemeConfig(mode: ThemeMode): CustomThemeConfig {
    const colors = getColors(mode);
    return {
        palette: {
            mode,
            primary: { main: colors.primary },
            secondary: { main: colors.secondary },
            error: { main: colors.error },
            warning: { main: colors.warning },
            info: { main: colors.info },
            success: { main: colors.success },
            background: { default: colors.background, paper: colors.paper },
            text: { primary: colors.textPrimary, secondary: colors.textSecondary },
            divider: colors.divider,
        },
        typography: {
            fontFamily: designTokens.fontFamily,
            h1: { fontSize: "2.5rem", fontWeight: designTokens.fontWeight.bold },
            h2: { fontSize: "2rem", fontWeight: designTokens.fontWeight.semiBold },
            h3: { fontSize: "1.75rem", fontWeight: designTokens.fontWeight.semiBold },
            h4: { fontSize: "1.5rem", fontWeight: designTokens.fontWeight.semiBold },
            h5: { fontSize: "1.25rem", fontWeight: designTokens.fontWeight.medium },
            h6: { fontSize: "1rem", fontWeight: designTokens.fontWeight.medium },
            body1: { fontSize: "1rem" },
            body2: { fontSize: "0.875rem", color: colors.textSecondary },
            button: { textTransform: "none", fontWeight: designTokens.fontWeight.semiBold },
        },
        shape: {
            borderRadius: designTokens.borderRadius.lg,
        },
        components: {
            MuiButton: {
                defaultProps: { disableElevation: true, variant: "contained" },
                styleOverrides: {
                    root: {
                        borderRadius: designTokens.borderRadius.sm,
                        padding: designTokens.padding.sm,
                        fontWeight: designTokens.fontWeight.semiBold,
                    },
                    containedPrimary: { backgroundColor: colors.primary, color: colors.textPrimary },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: { backgroundColor: colors.appBar },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: designTokens.borderRadius.xl,
                        boxShadow: designTokens.boxShadow.card,
                        backgroundColor: colors.card,
                    },
                },
            },
            MuiTextField: {
                defaultProps: { variant: "outlined", fullWidth: true },
                styleOverrides: {
                    root: { marginBottom: designTokens.padding.lg },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: { padding: designTokens.padding.lg, backgroundColor: colors.paper },
                },
            },
            MuiToolbar: {
                styleOverrides: {
                    root: { minHeight: designTokens.minHeight.toolbar },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: { backgroundColor: colors.card, color: colors.textPrimary },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        borderRadius: designTokens.borderRadius.lg,
                        padding: designTokens.padding.lg,
                        backgroundColor: colors.dialog,
                    },
                },
            },
            MuiSnackbar: {
                styleOverrides: {
                    root: { borderRadius: designTokens.borderRadius.md },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius: designTokens.borderRadius.sm,
                        fontWeight: designTokens.fontWeight.medium,
                        backgroundColor: colors.chip,
                    },
                },
            },
            MuiAvatar: {
                styleOverrides: {
                    root: { backgroundColor: colors.avatar, color: colors.textPrimary },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        borderRadius: designTokens.borderRadius.md,
                        color: colors.iconButton,
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: { backgroundColor: colors.tabsIndicator },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        fontWeight: designTokens.fontWeight.semiBold,
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: { backgroundColor: colors.tableHead },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        borderBottom: `1px solid ${colors.divider}`,
                    },
                    head: {
                        fontWeight: designTokens.fontWeight.semiBold,
                        color: colors.tableCellHead,
                    },
                },
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        borderRadius: designTokens.borderRadius.md,
                        padding: designTokens.padding.sm,
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        borderRadius: designTokens.borderRadius.md,
                        "&.Mui-selected": {
                            backgroundColor: colors.listItemSelected,
                            color: colors.textPrimary,
                        },
                    },
                },
            },
            MuiSwitch: {
                styleOverrides: {
                    thumb: { backgroundColor: colors.switchThumb },
                },
            },
            MuiCheckbox: {
                styleOverrides: {
                    root: { color: colors.checkbox },
                },
            },
            MuiRadio: {
                styleOverrides: {
                    root: { color: colors.radio },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        borderRadius: designTokens.borderRadius.sm,
                        backgroundColor: colors.tooltipBg,
                    },
                },
            },
        },
    };
}
