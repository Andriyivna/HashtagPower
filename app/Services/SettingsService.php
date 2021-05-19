<?php


namespace App\Services;
use App\Setting;

class SettingsService
{
    public static function get($name)
    {
        $result = Setting::where('name', $name)->get();
        if ($result->isEmpty()) {
            return null;
        }
        return self::format($result->first());
    }

    public static function set($name, $value)
    {
        $result = Setting::where('name', $name)->get();
        if ($result->isEmpty()) {
            return null;
        }

        $setting = $result->first();
        $setting->value = $value;
        $setting->save();

        return $setting;
    }

    protected static function format($setting) {
       if ($setting->type == 'string') {
           return self::formatToString($setting->value);
       }
        if ($setting->type == 'boolean') {
            return self::formatToBoolean($setting->value);
        }
        if ($setting->type == 'number') {
            return self::formatToNumber($setting->value);
        }
        return $setting->value;
    }

    protected static function formatToString($value): string {
        return trim($value);
    }
    protected static function formatToBoolean($value): bool {
        return filter_var($value, FILTER_VALIDATE_BOOLEAN);
    }
    protected static function formatToNumber($value): int {
        return intval($value, 10);
    }
}
