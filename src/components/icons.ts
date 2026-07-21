import {
  Backpack,
  CalendarDays,
  Camera,
  Clock,
  CloudRain,
  Drum,
  Eye,
  Hand,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Music,
  Phone,
  Route,
  Share2,
  Shirt,
  Smile,
  Store,
  Users,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconKey } from '../data/festivalData'

/**
 * festivalData.ts の icon 名（文字列）を Lucide のアイコンに変換する対応表。
 * アイコンを追加したい場合は、IconKey にも名前を追加してください。
 */
export const iconMap: Record<IconKey, LucideIcon> = {
  backpack: Backpack,
  calendar: CalendarDays,
  camera: Camera,
  clock: Clock,
  drum: Drum,
  eye: Eye,
  hand: Hand,
  heartHandshake: HeartHandshake,
  lightbulb: Lightbulb,
  mapPin: MapPin,
  music: Music,
  phone: Phone,
  rain: CloudRain,
  route: Route,
  share: Share2,
  shirt: Shirt,
  smile: Smile,
  store: Store,
  users: Users,
  wallet: Wallet,
}
